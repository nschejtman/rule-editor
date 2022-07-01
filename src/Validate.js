import validator from "@aml-org/amf-custom-validator-web/dist/main"


function validate(singleRule, data) {
    const profile=wrapInRuleset(singleRule)

    validator.initialize(() => {
        validator.validate(profile, data, false, (r, err) => {
            if (err) {
                console.log(err);
            } else {
                let element = document.getElementById('report');
                element.textContent = r
                element.report = JSON.parse(r);
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