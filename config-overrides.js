// config-overrides.js
module.exports = function override(config, env) {
    const svgRuleIndex = config.module.rules.findIndex(rule =>
      rule.oneOf && rule.oneOf.some(innerRule => innerRule.test && innerRule.test.toString().includes('.svg'))
    );
  
    if (svgRuleIndex >= 0) {
      const svgRule = config.module.rules[svgRuleIndex].oneOf.find(rule => rule.test && rule.test.toString().includes('.svg'));
      if (svgRule) {
        svgRule.use[0].options = {
          ...svgRule.use[0].options,
          throwIfNamespace: false,
        };
      }
    }
  
    return config;
  };
  