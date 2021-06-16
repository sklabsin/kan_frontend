import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import overlayFactory from 'react-bootstrap-table2-overlay';

const RemotePagination = ({ data,keyField, onTableChange, totalSize, loading, columns, page, sizePerPage, selectRow}) => (
    <div>
        <BootstrapTable
            bootstrap4
            classes="mt-3 mt-md-4"
            remote
            loading={loading}
            keyField={keyField}
            data={data}
            columns={columns}
            selectRow={selectRow}
            pagination={paginationFactory({ page, sizePerPage, totalSize })}
            overlay={overlayFactory({
                spinner: true,
                styles: {
                    overlay: base => ({
                        ...base,
                        background: 'rgba(122, 118, 128, 0.1)',
                    }),
                },
            })}
            
            onTableChange={onTableChange}
            striped
            hover
            condensed
            noDataIndication="No records found"
        />
    </div>
)
export default RemotePagination;