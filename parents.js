// For Parents page: mobile menu and the strand/status filters.
// The table is plain HTML, so everything is readable without this script; the filters only appear when it runs.
(function () {
  var menu = document.getElementById('menuToggle'), mobile = document.getElementById('mobileNav');
  if (menu && mobile) {
    menu.addEventListener('click', function () {
      var isOpen = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!isOpen));
      mobile.hidden = isOpen;
    });
  }
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var form = document.getElementById('alignFilters');
  if (!form) return;
  var strandSel = document.getElementById('fStrand');
  var boxes = Array.prototype.slice.call(form.querySelectorAll('input[name="fStatus"]'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-strand-section]'));
  var result = document.getElementById('filterResult');
  var empty = document.getElementById('emptyFilter');

  function apply() {
    var strand = strandSel.value;
    var statuses = boxes.filter(function (b) { return b.checked; }).map(function (b) { return b.value; });
    var shown = 0;
    sections.forEach(function (sec) {
      var inStrand = strand === 'all' || sec.getAttribute('data-strand-section') === strand;
      var visibleInSection = 0;
      var rows = sec.querySelectorAll('tbody tr');
      var group = null, groupCount = 0;
      function closeGroup() { if (group) group.hidden = groupCount === 0; }
      for (var i = 0; i < rows.length; i++) {
        var r = rows[i];
        if (r.classList.contains('group-row')) { closeGroup(); group = r; groupCount = 0; continue; }
        var show = inStrand && statuses.indexOf(r.getAttribute('data-status')) !== -1;
        r.hidden = !show;
        if (show) { groupCount++; visibleInSection++; }
      }
      closeGroup();
      sec.hidden = visibleInSection === 0;
      shown += visibleInSection;
    });
    result.textContent = 'Showing ' + shown + (shown === 1 ? ' standard' : ' standards');
    empty.hidden = shown !== 0;
  }

  strandSel.addEventListener('change', apply);
  boxes.forEach(function (b) { b.addEventListener('change', apply); });
  form.addEventListener('submit', function (e) { e.preventDefault(); });
  form.hidden = false;
  apply();
})();
