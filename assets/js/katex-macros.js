(function(exports, d) {
    function ready(fn) {
        if (document.readyState != 'loading') {
          fn();
        } else if (document.addEventListener) {
          document.addEventListener('DOMContentLoaded', fn);
        } else {
          document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading')
              fn();
          });
        }
    }

    exports.ready = ready;
})(window, document);

ready(function () {
    renderMathInElement(document.body, {
      delimiters: [
      {left: "$$", right: "$$", display: true},
      {left: "$", right: "$", display: false}
      ],

      macros: {
        // Algebra-Precal
        "\\field": "\\mathbb{#1}",
        "\\C": "\\field{C}",
        "\\F": "\\field{F}",
        "\\Q": "\\field{Q}",
        "\\lcm": "\\mathop{\\mathrm{lcm}}",
        "\\Re": "\\mathop{\\mathrm{Re}}",
        "\\Im": "\\mathop{\\mathrm{Im}}",
        // Algebra
        "\\GL": "\\mathrm{GL}",
        "\\SL": "\\mathrm{SL}",
        "\\Aut": "\\mathrm{Aut}",
        "\\id": "\\mathop{\\mathrm{id}}(#1)",
        "\\card": "\\mathop{\\mathrm{card}}(#1)",
        // Linear Algebra
        "\\vect": "\\boldsymbol{\\mathbf{#1}}",
        "\\span": "\\mathop{(\\mathrm{#1})}",
        "\\zeros": "\\mathbf{0}",
        // Calculus
        "\\dd": "\\mathop{\\mathrm{d} #1}",
        "\\dn": "\\mathop{\\mathrm{d}^{#1} #2}",
        "\\abs": "\\lvert#1\\rvert",
        "\\abslr": "\\left\\lvert#1\\right\\rvert",
        "\\norm": "\\lvert#1\\rvert",
        "\\normlr": "\\left\\lvert#1\\right\\rvert",
        // Geometry & Topology
        "\\interior": "\\mathop{\\mathrm{int}}",
        "\\ext": "\\mathop{\\mathrm{ext}}",
        "\\vol": "\\mathop{\\mathrm{vol}}",
        // Elementary Probability
        "\\E": "{\\rm i\\kern-.3em E}",
        "\\Var": "\\mathop{\\mathrm{Var}}",
        "\\Cov": "\\mathop{\\mathrm{Cov}}",
        "\\Binom": "\\mathop{\\mathrm{Binom}}",
        "\\Exp": "\\mathop{\\mathrm{Exp}}",
        "\\Poi": "\\mathop{\\mathrm{Poi}}",
        // Probability/Measure Theory
        "\\Er": "\\mathcal{E}", // E-rond
        "\\Bor": "\\mathcal{B}(#1)", // Borel
        "\\CO": "\\mathcal{C}",
        "\\OXT": "^{\\otimes\\Bbb{T}}"
      }
    });
  });
