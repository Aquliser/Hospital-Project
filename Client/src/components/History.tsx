import { useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
{/*
import { ProgressSpinner } from 'primereact/progressspinner';
*/}
import { Paginator } from 'primereact/paginator';
{/*
mport 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
*/}
import Navbar from './shared/Navbar';
import Sidebar from './shared/sidebar';

const History = () => {
  const [first, setFirst] = useState<number>(0);
  const [rows, ] = useState<number>(10);
  const [globalFilter, setGlobalFilter] = useState<string>('');

  const data = [];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
    <main className="data-container">
      <h2>refer system</h2>
        {/*<div className="loading-container">
          <ProgressSpinner className="loading-spinner" />
        </div>*/}
        <>
          <div className="table-header">
            <h3>Search:</h3>
            <input
              type="text"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search..."
            />
          </div>
          <DataTable
            paginator
            rows={rows}
            first={first}
            onPage={(e) => setFirst(e.first)}
            globalFilter={globalFilter}
            emptyMessage="No records found"
          >
            <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} sortable />
            <Column field="ID" header="REF. Number" filter filterPlaceholder="Search by REF. Number" style={{ minWidth: '12rem' }} sortable />
            <Column field="HN" header="HN" filter filterPlaceholder="Search by HN" style={{ minWidth: '12rem' }} sortable />
            <Column field="CID" header="CID" filter filterPlaceholder="Search by CID" style={{ minWidth: '12rem' }} sortable />
            <Column field="disease" header="โรคประจำตัว" filter filterPlaceholder="Search by disease" style={{ minWidth: '12rem' }} sortable />
            <Column field="treatment" header="สิทธิการรักษา" filter filterPlaceholder="Search by treatment" style={{ minWidth: '12rem' }} sortable />
          </DataTable>
          <Paginator first={first} rows={rows} totalRecords={data.length} onPageChange={(e) => setFirst(e.first)} />
        </>
    </main>
    </div>
    </div>
  );
};

export default History;
