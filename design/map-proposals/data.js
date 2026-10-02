// Sample data shared by the three map design proposals.
// "project" mirrors this repository's docs/ (titles, summaries, decision counts as of 2026-10-02).
// "large" is an invented accounting app, to see how each design behaves with ~40 nodes.
window.MAP_DATA = {
  project: {
    label: 'This project',
    nodes: [
      { path: '', title: 'AI Visual Project Management', deps: [], decisions: 10, summary: 'Turns a folder of md docs in a git repo into a visual, navigable map of a project built with AI.' },
      { path: 'format', title: 'Formato de los md', deps: [], decisions: 16, summary: 'The convention that lets a folder of md files be read as a project map, by people and by assistants.' },
      { path: 'model', title: 'Modelo de datos', deps: ['format'], decisions: 14, summary: 'What the tool builds in memory from the docs folder: nodes, hierarchy, cross dependencies and format warnings.' },
      { path: 'viewer', title: 'Visor', deps: ['model'], decisions: 3, summary: 'The page people use: browse the project as a map or a tree, select a node, double-click to start a thread.' },
      { path: 'viewer/map', title: 'Mapa', deps: ['model'], decisions: 9, summary: 'The project tree drawn as boxes from left to right. Dependencies repeat as reference boxes under the dependent node.' },
      { path: 'viewer/map/mejora-visual', title: 'Mejora visual', deps: [], decisions: 0, status: 'draft', summary: 'Design improvements for the map: boxes, lines and references, so the map reads more clearly.' },
      { path: 'viewer/tree', title: 'Árbol', deps: ['model'], decisions: 14, summary: 'Browse the project as a multi-level tree, with dependencies as reference entries under the dependent node.' },
      { path: 'viewer/node-card', title: 'Ficha del nodo', deps: ['model'], decisions: 9, summary: 'Shows the selected node: title, path, status, chats, Summary, Decisions, dependencies, dependents and warnings.' },
      { path: 'context-pack', title: 'Paquete de contexto', deps: ['model', 'format'], decisions: 14, summary: 'Double-click copies a short prompt to start a new thread on the node; another button creates a sub-task.' },
      { path: 'build', title: 'Apertura de la página', deps: ['viewer', 'model'], decisions: 9, summary: 'A single fixed index.html opened in the browser. "Open folder" picks the docs folder; F5 reloads.' },
      { path: 'roadmap', title: 'Hoja de ruta', deps: [], decisions: 1, summary: 'What comes after v1, written down so it is neither lost nor built too early.' },
    ],
  },
  large: {
    label: 'Larger sample (invented)',
    nodes: [
      { path: '', title: 'ProConta', deps: [], decisions: 12, summary: 'Desktop accounting app for small firms: ledger, invoicing, taxes and reports.' },
      { path: 'core', title: 'Núcleo', deps: [], decisions: 6, summary: 'Shared domain model and services used by every module.' },
      { path: 'core/company', title: 'Empresas', deps: [], decisions: 8, summary: 'Companies, fiscal years and their settings.' },
      { path: 'core/accounts', title: 'Plan de cuentas', deps: ['core/company'], decisions: 11, summary: 'Chart of accounts per company, with the official template as a starting point.' },
      { path: 'core/periods', title: 'Periodos', deps: ['core/company'], decisions: 5, summary: 'Monthly periods, opening and closing.' },
      { path: 'core/currency', title: 'Divisas', deps: [], decisions: 3, summary: 'Currencies and exchange rates.' },
      { path: 'core/audit', title: 'Auditoría', deps: ['security'], decisions: 4, summary: 'Who changed what and when, for every posted entry.' },
      { path: 'ledger', title: 'Contabilidad', deps: ['core/accounts', 'core/periods'], decisions: 9, summary: 'Journal entries and the general ledger.' },
      { path: 'ledger/entries', title: 'Asientos', deps: ['core/currency'], decisions: 15, summary: 'Create, edit and post journal entries, with templates for recurring ones.' },
      { path: 'ledger/reconcile', title: 'Conciliación', deps: ['banking/import'], decisions: 7, summary: 'Match bank movements with ledger entries.' },
      { path: 'ledger/closing', title: 'Cierre', deps: ['core/periods'], decisions: 6, summary: 'Year-end closing and opening entries.' },
      { path: 'ledger/assets', title: 'Inmovilizado', deps: [], decisions: 4, status: 'draft', summary: 'Fixed assets and depreciation schedules.' },
      { path: 'sales', title: 'Ventas', deps: ['ledger'], decisions: 5, summary: 'Customers, invoices and collections.' },
      { path: 'sales/customers', title: 'Clientes', deps: [], decisions: 6, summary: 'Customer records and their payment terms.' },
      { path: 'sales/invoices', title: 'Facturas', deps: ['sales/customers', 'taxes/vat'], decisions: 18, summary: 'Issue invoices, credit notes and series; posts to the ledger automatically.' },
      { path: 'sales/invoices/einvoice', title: 'Factura electrónica', deps: ['security/certificates'], decisions: 9, summary: 'Signed electronic invoices sent to the tax agency.' },
      { path: 'sales/invoices/pdf', title: 'PDF de factura', deps: [], decisions: 4, summary: 'Printable invoice layout with the company logo.' },
      { path: 'sales/collections', title: 'Cobros', deps: ['banking'], decisions: 5, summary: 'Due dates, partial payments and reminders.' },
      { path: 'purchases', title: 'Compras', deps: ['ledger'], decisions: 4, summary: 'Suppliers, received invoices and payments.' },
      { path: 'purchases/suppliers', title: 'Proveedores', deps: [], decisions: 5, summary: 'Supplier records.' },
      { path: 'purchases/received', title: 'Facturas recibidas', deps: ['taxes/vat'], decisions: 10, summary: 'Register received invoices, with OCR import planned.' },
      { path: 'purchases/ocr', title: 'Lectura OCR', deps: [], decisions: 2, status: 'obsolete', summary: 'Replaced by the import wizard.' },
      { path: 'taxes', title: 'Impuestos', deps: ['ledger'], decisions: 3, summary: 'Tax returns computed from the ledger.' },
      { path: 'taxes/vat', title: 'IVA', deps: [], decisions: 14, summary: 'VAT rates, VAT books and the quarterly return.' },
      { path: 'taxes/withholding', title: 'Retenciones', deps: [], decisions: 6, summary: 'Withholding on professional invoices.' },
      { path: 'taxes/annual', title: 'Resumen anual', deps: ['taxes/vat', 'taxes/withholding'], decisions: 5, summary: 'Annual summaries filed at year end.' },
      { path: 'banking', title: 'Bancos', deps: [], decisions: 3, summary: 'Bank accounts and their movements.' },
      { path: 'banking/import', title: 'Importación', deps: [], decisions: 8, summary: 'Import bank statements in the standard formats.' },
      { path: 'banking/sepa', title: 'Remesas SEPA', deps: ['sales/collections'], decisions: 7, summary: 'Direct-debit batches for customer collections.' },
      { path: 'reports', title: 'Informes', deps: ['ledger'], decisions: 4, summary: 'Financial statements and listings.' },
      { path: 'reports/balance', title: 'Balance', deps: [], decisions: 6, summary: 'Balance sheet and trial balance.' },
      { path: 'reports/pnl', title: 'Pérdidas y ganancias', deps: [], decisions: 5, summary: 'Profit and loss by period.' },
      { path: 'reports/export', title: 'Exportación', deps: [], decisions: 3, status: 'draft', summary: 'Export any report to Excel or PDF.' },
      { path: 'security', title: 'Seguridad', deps: [], decisions: 7, summary: 'Users, roles and permissions.' },
      { path: 'security/login', title: 'Login', deps: [], decisions: 5, summary: 'Email and password; lock after five failed attempts.' },
      { path: 'security/certificates', title: 'Certificados', deps: [], decisions: 4, summary: 'Digital certificates used to sign documents.' },
      { path: 'ui', title: 'Interfaz', deps: [], decisions: 8, summary: 'Shell, navigation and shared controls.' },
      { path: 'ui/shell', title: 'Ventana principal', deps: ['security/login'], decisions: 6, summary: 'Main window, menus and company switcher.' },
      { path: 'ui/grids', title: 'Rejillas', deps: [], decisions: 9, summary: 'Editable data grids used across modules.' },
    ],
  },
};

// Builds the hierarchy: each node gets parent, children, depth, branch (index of its top-level area),
// depNodes (its own dependencies) and dependents.
window.buildTree = function (nodes) {
  const byPath = new Map(nodes.map(n => [n.path, { ...n, status: n.status || 'stable', children: [], dependents: [] }]));
  const root = byPath.get('');
  for (const n of byPath.values()) {
    if (n === root) continue;
    const parentPath = n.path.includes('/') ? n.path.slice(0, n.path.lastIndexOf('/')) : '';
    n.parent = byPath.get(parentPath);
    n.parent.children.push(n);
  }
  const walk = (n, depth, branch, obsolete) => {
    n.depth = depth; n.branch = branch; n.inObsolete = obsolete || n.status === 'obsolete';
    n.children.forEach((c, i) => walk(c, depth + 1, depth === 0 ? i : branch, n.inObsolete));
  };
  walk(root, 0, -1, false);
  for (const n of byPath.values()) {
    n.depNodes = n.deps.map(p => byPath.get(p)).filter(Boolean);
    n.depNodes.forEach(d => d.dependents.push(n));
  }
  return { root, byPath, all: [...byPath.values()] };
};
