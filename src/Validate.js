import validator from "@aml-org/amf-custom-validator-web/dist/main"
import {
    AMFBaseUnitClient,
    AMFDocumentResult,
    AMFParseResult,
    APIConfiguration,
    AsyncApi,
    Document,
    OASConfiguration,
    RAMLConfiguration,
    Spec,
    WebApi,
    WebAPIConfiguration
  } from 'amf-client-js';


async function validate(singleRule, data) {
    const profile=wrapInRuleset(singleRule)

    const amfClient = APIConfiguration.API().baseUnitClient()
    const parsingResult = await amfClient.parseContent(data)
    const spec = parsingResult.sourceSpec
    const specificClient = APIConfiguration.fromSpec(spec).baseUnitClient()
    const transformed = specificClient.transform(parsingResult.baseUnit)
    const transformedString = specificClient.render(transformed.baseUnit, "application/ld+json")


    console.log(transformedString)

    validator.initialize(() => {
        validator.validate(profile, transformedString, false, (r, err) => {
            if (err) {
                console.log(err);
            } else {
                let element = document.getElementById('report');
                element.textContent = JSON.stringify(JSON.parse(r), null, 2)
            }
        });
    })
}

function wrapInRuleset(rule) {
  const ruleWithPadding=rule.replaceAll('\n', '\n    ')
  return `#%Validation Profile 1.0
profile: test-profile
violation:
  - test-rule
    
validations:
  test-rule:
    ${ruleWithPadding}
  `
}

export default validate