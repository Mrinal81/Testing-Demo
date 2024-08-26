// import React, { useMemo, useState } from 'react'
// import DataTable from '@/components/shared/DataTable'
// import { Button, Dialog, Checkbox } from '@/components/ui'
// import useThemeClass from '@/utils/hooks/useThemeClass'
// import cloneDeep from 'lodash/cloneDeep'
// import type {
//     OnSortParam,
//     ColumnDef,
// } from '@/components/shared/DataTable'

// interface DataRow {
//     id: number;
//     title: string;
//     description: string;
//     details: string;
// }

// const dummyData: DataRow[] = [
//     {
//         id: 1,
//         title: "Preamble",
//         description: "Introduction to the Constitution of India",
//         details: "The Preamble to the Constitution of India is a brief introductory statement that sets out the guiding purposes and principles of the document. It declares India to be a Sovereign Socialist Secular Democratic Republic and aims to secure justice, liberty, equality, and fraternity for all citizens.",
//       },
//       {
//         id: 2,
//         title: "Article 1",
//         description: "Name and territory of the Union",
//         details: "Article 1 of the Indian Constitution defines India as a Union of States. It establishes the territory of India and details the powers of the Union and the States in the Indian federation. It also defines the boundaries of the Indian States and the Union Territories.",
//       },
//       {
//         id: 3,
//         title: "Article 19",
//         description: "Protection of certain rights regarding freedom of speech, etc.",
//         details: "Article 19 of the Indian Constitution guarantees the freedom of speech and expression, freedom to assemble peacefully without arms, freedom to form associations or unions, freedom to move freely throughout the territory of India, freedom to reside and settle in any part of India, and freedom to practice any profession or carry on any occupation, trade, or business.",
//       },
//       {
//         id: 4,
//         title: "Article 21",
//         description: "Protection of life and personal liberty",
//         details: "Article 21 guarantees the protection of life and personal liberty. It states that no person shall be deprived of their life or personal liberty except according to the procedure established by law. This article has been interpreted by the Supreme Court to include various aspects of life and personal liberty beyond mere physical existence.",
//       },
//       {
//         id: 5,
//         title: "Article 370",
//         description: "Temporary provisions with respect to the State of Jammu and Kashmir",
//         details: "Article 370 provided special autonomous status to the state of Jammu and Kashmir. It allowed the state to have its own constitution and limited the power of the Indian Parliament in the state. The article was abrogated in August 2019, leading to the reorganization of Jammu and Kashmir into two Union Territories.",
//       },
//       {
//         id: 6,
//         title: "Fundamental Duties",
//         description: "Duties of citizens",
//         details: "The Fundamental Duties are a set of moral obligations outlined in Part IVA of the Indian Constitution. They were added by the 42nd Amendment in 1976. These duties include respecting the Constitution, promoting harmony, preserving the country's heritage, and protecting the environment.",
//       },
//       {
//         id: 7,
//         title: "Directive Principles of State Policy",
//         description: "Guidelines for the framing of laws by the government",
//         details: "The Directive Principles of State Policy, outlined in Part IV of the Indian Constitution, are guidelines for the state to formulate policies and enact laws. They are meant to guide the government in making laws that promote social and economic welfare, but they are not justiciable in nature.",
//       },
//       {
//         id: 8,
//         title: "Article 32",
//         description: "Remedies for enforcement of fundamental rights",
//         details: "Article 32 of the Indian Constitution provides the right to constitutional remedies. It allows individuals to approach the Supreme Court for the enforcement of fundamental rights, ensuring that these rights are not violated. The Supreme Court has the power to issue writs for this purpose.",
//       },
// ];

// const RecommendedTableContent: React.FC = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedDetails, setSelectedDetails] = useState("");
//     const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

//     const openModal = (details: string) => {
//         setSelectedDetails(details);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     const isAllSelected = useMemo(
//         () => selectedItems.size > 0 && selectedItems.size === dummyData.length,
//         [selectedItems]
//     );

//     const handleCheckboxChange = (id: number) => {
//         setSelectedItems((prev) => {
//             const newSet = new Set(prev);
//             if (newSet.has(id)) {
//                 newSet.delete(id);
//             } else {
//                 newSet.add(id);
//             }
//             return newSet;
//         });
//     };

//     const handleSelectAllChange = () => {
//         if (isAllSelected) {
//             setSelectedItems(new Set());
//         } else {
//             setSelectedItems(new Set(dummyData.map((item) => item.id)));
//         }
//     };

//     const columns: ColumnDef<DataRow>[] = useMemo(
//         () => [
//             {
//                 header: ({ table }) => (
//                     <Checkbox
//                         checked={isAllSelected}
//                         onChange={handleSelectAllChange}
//                     />
//                 ),
//                 id: 'select',
//                 cell: ({ row }) => (
//                     <Checkbox
//                         checked={selectedItems.has(row.original.id)}
//                         onChange={() => handleCheckboxChange(row.original.id)}
//                     />
//                 ),
//             },
//             {
//                 header: 'Title',
//                 accessorKey: 'title',
//             },
//             {
//                 header: 'Description',
//                 accessorKey: 'description',
//                 cell: (props) => {
//                     const { description } = props.row.original
//                     const maxLength = 70
//                     const truncatedDescription = description.length > maxLength
//                         ? description.substring(0, maxLength) + '...'
//                         : description
//                     return (
//                         <span title={description} className="block max-w-md truncate">
//                             {truncatedDescription}
//                         </span>
//                     )
//                 },
//             },
//             {
//                 header: 'Details',
//                 id: 'details',
//                 cell: (props) => (
//                     <Button
//                         size="sm"
//                         variant="solid"
//                         onClick={() => openModal(props.row.original.details)}
//                     >
//                         View Details
//                     </Button>
//                 ),
//             },
//         ],
//         [selectedItems, isAllSelected]
//     )

//     const [tableData, setTableData] = useState({
//         total: dummyData.length,
//         pageIndex: 1,
//         pageSize: 10,
//         query: '',
//         sort: { order: '', key: '' },
//     })

//     const onPaginationChange = (page: number) => {
//         const newTableData = cloneDeep(tableData)
//         newTableData.pageIndex = page
//         setTableData(newTableData)
//     }

//     const onSelectChange = (value: number) => {
//         const newTableData = cloneDeep(tableData)
//         newTableData.pageSize = Number(value)
//         newTableData.pageIndex = 1
//         setTableData(newTableData)
//     }

//     const onSort = (sort: OnSortParam) => {
//         const newTableData = cloneDeep(tableData)
//         newTableData.sort = sort
//         setTableData(newTableData)
//     }

//     return (
//         <>
//             <DataTable
//                 columns={columns}
//                 data={dummyData}
//                 skeletonAvatarColumns={[0]}
//                 skeletonAvatarProps={{ className: 'rounded-md' }}
//                 loading={false}
//                 pagingData={{
//                     total: tableData.total,
//                     pageIndex: tableData.pageIndex,
//                     pageSize: tableData.pageSize,
//                 }}
//                 onPaginationChange={onPaginationChange}
//                 onSelectChange={onSelectChange}
//                 onSort={onSort}
//             />
//             <Dialog
//                 isOpen={isModalOpen}
//                 onClose={closeModal}
//                 title="Law Details"
//             >
//                 <div className="max-h-[70vh] overflow-y-auto p-4">
//                     <p>{selectedDetails}</p>
//                 </div>
//                 <div className="text-right mt-6">
//                 </div>
//             </Dialog>
//         </>
//     )
// }




import React, { useMemo, useState } from 'react'
import DataTable from '@/components/shared/DataTable'
import { Checkbox, Tooltip } from '@/components/ui'
import cloneDeep from 'lodash/cloneDeep'
import type { OnSortParam, ColumnDef } from '@/components/shared/DataTable'

// Updated interface to include new fields
interface ComplianceRow {
    ComplianceId: number;
    ComplianceHeader: string;
    Legislation: string;
    ComplianceCategorization: string;
    ComplianceDescription: string;
}

const complianceData: ComplianceRow[] = [
    {
        ComplianceId: 3236,
        ComplianceHeader: "Renewal of Registration",
        Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955",
        ComplianceCategorization: "LICENSE / REGISTRATION",
        ComplianceDescription: "Apply for renewal of certificate of registration in Form IA in duplicate, not less than thirty days before the date on which the certificate of registration expires to the Inspecting Officer, along with the prescribed fees."
    },
    {
        ComplianceId: 3237,
        ComplianceHeader: "Annual Financial Statements",
        Legislation: "Companies Act, 2013",
        ComplianceCategorization: "FINANCIAL REPORTING",
        ComplianceDescription: "Submit annual financial statements, including balance sheet, profit and loss account, and auditor’s report, to the Registrar of Companies within thirty days of holding the annual general meeting."
    },
    {
        ComplianceId: 3238,
        ComplianceHeader: "Employee Provident Fund Contribution",
        Legislation: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
        ComplianceCategorization: "EMPLOYMENT / SOCIAL SECURITY",
        ComplianceDescription: "Contribute to the Employee Provident Fund on a monthly basis, as per the prescribed percentage of the employees’ wages, and file the monthly returns with the Employees' Provident Fund Organisation."
    },
    {
        ComplianceId: 3239,
        ComplianceHeader: "Fire Safety Inspection",
        Legislation: "The Fire Services Act, 1940",
        ComplianceCategorization: "SAFETY / HEALTH",
        ComplianceDescription: "Ensure that the premises are inspected by the local fire department at least once every year to verify compliance with fire safety norms and obtain a fire safety certificate."
    },
    {
        ComplianceId: 3240,
        ComplianceHeader: "Goods and Services Tax Filing",
        Legislation: "Goods and Services Tax Act, 2017",
        ComplianceCategorization: "TAXATION",
        ComplianceDescription: "File monthly GST returns and pay the applicable GST to the government. Maintain records of all transactions and invoices as per GST rules and regulations."
    }
];


const RecommendedTableContent = () => {
    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

    const isAllSelected = useMemo(
        () => selectedItems.size > 0 && selectedItems.size === complianceData.length,
        [selectedItems]
    );

    const handleCheckboxChange = (id: number) => {
        setSelectedItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id); // Deselect if already selected
            } else {
                newSet.add(id); // Select if not already selected
            }
            return newSet;
        });
    };

    const handleSelectAllChange = () => {
        if (isAllSelected) {
            setSelectedItems(new Set()); // Deselect all
        } else {
            setSelectedItems(new Set(complianceData.map((item) => item.ComplianceId))); // Select all
        }
    };

    const columns: ColumnDef<ComplianceRow>[] = useMemo(
        () => [
            {
                header: ({ table }) => (
                    <Checkbox
                        checked={isAllSelected}
                        onChange={handleSelectAllChange}
                    />
                ),
                id: 'select',
                cell: ({ row }) => (
                    <div>
                        <Checkbox
                        checked={selectedItems.has(row.original.ComplianceId)}
                        onChange={() => handleCheckboxChange(row.original.ComplianceId)}
                        />
                        </div>
                ),
            },
            {
                header: 'Compliance ID',
                accessorKey: 'ComplianceId',
                cell: (props) => (
                    <Tooltip title={`Compliance ID: ${props.getValue()}`} placement="top">
                        <div className="w-28 truncate">{props.getValue()}</div>
                    </Tooltip>
                ),
            },
            {
                header: 'Header',
                accessorKey: 'ComplianceHeader',
                cell: (props) => {
                    const value = props.getValue() as string;
                    return (
                        <Tooltip title={value} placement="top">
                            <div className="w-40 truncate">{value.length > 20 ? value.substring(0, 20) + '...' : value}</div>
                        </Tooltip>
                    );
                },
            },
            {
                header: 'Legislation',
                accessorKey: 'Legislation',
                cell: (props) => {
                    const value = props.getValue() as string;
                    return (
                        <Tooltip title={value} placement="top">
                            <div className="w-36 truncate">{value.length > 30 ? value.substring(0, 30) + '...' : value}</div>
                        </Tooltip>
                    );
                },
            },
            {
                header: 'Category',
                accessorKey: 'ComplianceCategorization',
                cell: (props) => (
                    <Tooltip title={props.getValue() as string} placement="top">
                        <div className="w-32 truncate">{props.getValue()}</div>
                    </Tooltip>
                ),
            },
            {
                header: 'Description',
                accessorKey: 'ComplianceDescription',
                cell: (props) => {
                    const value = props.getValue() as string;
                    return (
                        <Tooltip title={value} placement="left">
                            <div className="w-64 truncate">{value.length > 50 ? value.substring(0, 50) + '...' : value}</div>
                        </Tooltip>
                    );
                },
            },
        ],
        [selectedItems, isAllSelected]
    )

    const [tableData, setTableData] = useState({
        total: complianceData.length,
        pageIndex: 1,
        pageSize: 10,
        query: '',
        sort: { order: '', key: '' },
    })

    const onPaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        setTableData(newTableData)
    }

    const onSelectChange = (value: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        setTableData(newTableData)
    }

    const onSort = (sort: OnSortParam) => {
        const newTableData = cloneDeep(tableData)
        newTableData.sort = sort
        setTableData(newTableData)
    }

    return (
        <div className="w-full">
            <DataTable
                columns={columns}
                data={complianceData}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ className: 'rounded-md' }}
                loading={false}
                pagingData={{
                    total: tableData.total,
                    pageIndex: tableData.pageIndex,
                    pageSize: tableData.pageSize,
                }}
                onPaginationChange={onPaginationChange}
                onSelectChange={onSelectChange}
                onSort={onSort}
            />
        </div>
    )
}

export default RecommendedTableContent
