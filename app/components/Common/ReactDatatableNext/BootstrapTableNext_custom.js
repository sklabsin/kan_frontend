import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import overlayFactory from 'react-bootstrap-table2-overlay';

const RemotePagination = ({ data,keyField, onTableChange, totalSize, loading, columns, page, sizePerPage,caption }) => (
    <div>
        <BootstrapTable
            bootstrap4
            classes="mt-0 mt-md-0"
            remote
            loading={loading}
            keyField={keyField}
            data={data}
            columns={columns}
            caption={caption}
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
            // striped
            hover
            condensed
            noDataIndication="No records found"
            headerClasses="header-class1"
            wrapperClasses="table-responsive"
        />
    </div>
)
export default RemotePagination;