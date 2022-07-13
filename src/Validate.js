import validator from "@aml-org/amf-custom-validator-web/dist/main";
import {APIConfiguration} from "amf-client-js";

async function validate(rule, data) {
  const profile = wrapInRuleset(rule);

  const amfClient = APIConfiguration.API().baseUnitClient();
  const parsingResult = await amfClient.parseContent(data);
  const spec = parsingResult.sourceSpec;
  const specificClient = APIConfiguration.fromSpec(spec).baseUnitClient();
  const transformed = specificClient.transform(parsingResult.baseUnit);
  const transformedString = specificClient.render(
    transformed.baseUnit,
    "application/ld+json"
  );

  let report = [];

  await validator.initialize(() => {
    validator.validate(profile, transformedString, false, (r, err) => {
      if (err) {
        console.log(err);
      } else {
        report = JSON.parse(r)
      }
    });
  });

  return {
    report: report,
    resolved: transformedString
  };
}

function wrapInRuleset(rule) {
  const ruleWithPadding = rule.replaceAll("\n", "\n    ");
  return `#%Validation Profile 1.0
profile: test-profile
violation:
  - test-rule
    
validations:
  test-rule:
    ${ruleWithPadding}
  `;
}

export default validate;
