import React, { useMemo, useState } from 'react'
import DataTable from '@/components/shared/DataTable'
import Badge from '@/components/ui/Badge'
import useThemeClass from '@/utils/hooks/useThemeClass'
import { useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import type {
    OnSortParam,
    ColumnDef,
} from '@/components/shared/DataTable'
import { Button } from '@/components/ui'

interface DataRow {
    Compliance_Id: number;
    IHRC_Company_Name: string;
    Location: string;
    Legislation: string;
    Compliance_Categorization: string;
    Compliance_Header: string;
    Compliance_Description: string;
    Penalty_Description: string;
    Compliance_Applicability: string;
    Bare_Act_Text: string;
    Compliance_Clause: string;
}

const dummyData: DataRow[] = [
  {
    Compliance_Id: 3236,
    IHRC_Company_Name: "",
    Location: "HMVL - Office - Muzaffarpur - sadtpur - HR/ Muzaffarpur/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Renewal of Registration",
    Compliance_Description: "Apply for renewal of certificate of registration in Form IA in duplicate, not less than thirty days before the date on which the certificate of registration expires to the Inspecting Officer, along with the prescribed fees.",
    Penalty_Description: "Fine which may extend to Rs. 250",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Make an application when registration certificate is lost or destroyed to the Inspecting Officer within seven days of such loss or destruction, for a duplicate copy along with a payment of a fee of two rupees, either by crossed Indian Postal Order or by d",
    Compliance_Clause: "Section 6 and Rule 3 A."
},
{
    Compliance_Id: 3237,
    IHRC_Company_Name: "",
    Location: "ABC - Office - Patna - sadtpur - HR/ Patna/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Apply for New License",
    Compliance_Description: "Apply for a new license in Form IA within thirty days of starting business operations to the Inspecting Officer, along with the prescribed fees.",
    Penalty_Description: "Fine which may extend to Rs. 500",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Make an application for a new license within thirty days of starting business operations to the Inspecting Officer, along with the prescribed fees.",
    Compliance_Clause: "Section 5 and Rule 4 A."
},
{
    Compliance_Id: 3238,
    IHRC_Company_Name: "",
    Location: "XYZ - Office - Gaya - sadtpur - HR/ Gaya/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Annual Return Filing",
    Compliance_Description: "Submit annual return in Form III to the Labour Department before 31st January each year.",
    Penalty_Description: "Fine which may extend to Rs. 1000",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Submit annual return in Form III to the Labour Department before 31st January each year, failing which a fine will be imposed.",
    Compliance_Clause: "Section 9 and Rule 5 B."
},
{
    Compliance_Id: 3239,
    IHRC_Company_Name: "",
    Location: "DEF - Office - Bhagalpur - sadtpur - HR/ Bhagalpur/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Obtain Trade License",
    Compliance_Description: "Obtain a trade license from the local municipal authority within thirty days of starting business operations.",
    Penalty_Description: "Fine which may extend to Rs. 750",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Obtain a trade license from the local municipal authority within thirty days of starting business operations.",
    Compliance_Clause: "Section 7 and Rule 6 C."
},
{
    Compliance_Id: 3240,
    IHRC_Company_Name: "",
    Location: "GHI - Office - Darbhanga - sadtpur - HR/ Darbhanga/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Fire Safety Certificate",
    Compliance_Description: "Obtain a fire safety certificate from the local fire department within sixty days of starting business operations.",
    Penalty_Description: "Fine which may extend to Rs. 1500",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Obtain a fire safety certificate from the local fire department within sixty days of starting business operations.",
    Compliance_Clause: "Section 10 and Rule 7 D."
},  
{  
    Compliance_Id: 3241,
    IHRC_Company_Name: "",
    Location: "JKL - Office - Purnia - sadtpur - HR/ Purnia/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Registration of Establishment",
    Compliance_Description: "Apply for registration of establishment within thirty days of commencement of business.",
    Penalty_Description: "Fine which may extend to Rs. 300",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Submit Form II along with necessary documents and prescribed fees for registration.",
    Compliance_Clause: "Section 11 and Rule 8 E."
},  
{  
    Compliance_Id: 3242,
    IHRC_Company_Name: "",
    Location: "MNO - Office - Ara - sadtpur - HR/ Ara/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Shop Closure Notice",
    Compliance_Description: "Notify the local authority of shop closure within fifteen days.",
    Penalty_Description: "Fine which may extend to Rs. 500",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Submit Form IV to notify the closure of the establishment within fifteen days.",
    Compliance_Clause: "Section 12 and Rule 9 F."
},  
{  
    Compliance_Id: 3243,
    IHRC_Company_Name: "",
    Location: "PQR - Office - Katihar - sadtpur - HR/ Katihar/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Employment Registration",
    Compliance_Description: "Register all employees with the labour department within thirty days of their appointment.",
    Penalty_Description: "Fine which may extend to Rs. 1000",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Register all employees using Form V within thirty days of their appointment.",
    Compliance_Clause: "Section 13 and Rule 10 G."
},  
{  
    Compliance_Id: 3244,
    IHRC_Company_Name: "",
    Location: "STU - Office - Siwan - sadtpur - HR/ Siwan/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Change in Ownership",
    Compliance_Description: "Notify the labour department of any change in ownership within thirty days.",
    Penalty_Description: "Fine which may extend to Rs. 750",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Submit Form VI to notify changes in ownership within thirty days.",
    Compliance_Clause: "Section 14 and Rule 11 H."
},  
{  
    Compliance_Id: 3245,
    IHRC_Company_Name: "",
    Location: "VWX - Office - Saharsa - sadtpur - HR/ Saharsa/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Fire Safety Drill",
    Compliance_Description: "Conduct a fire safety drill every six months and document the activity.",
    Penalty_Description: "Fine which may extend to Rs. 2000",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Maintain records of fire safety drills and submit them to the local fire department.",
    Compliance_Clause: "Section 15 and Rule 12 I."
},  
{  
    Compliance_Id: 3246,
    IHRC_Company_Name: "",
    Location: "YZA - Office - Chapra - sadtpur - HR/ Chapra/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Inspection Register",
    Compliance_Description: "Maintain an inspection register and present it during inspections by the labour department.",
    Penalty_Description: "Fine which may extend to Rs. 300",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Keep the inspection register updated and available for inspection at all times.",
    Compliance_Clause: "Section 16 and Rule 13 J."
},  
{  
    Compliance_Id: 3247,
    IHRC_Company_Name: "",
    Location: "BCD - Office - Munger - sadtpur - HR/ Munger/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Health and Safety Measures",
    Compliance_Description: "Implement health and safety measures for employees and conduct regular audits.",
    Penalty_Description: "Fine which may extend to Rs. 5000",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Ensure compliance with health and safety regulations and conduct regular internal audits.",
    Compliance_Clause: "Section 17 and Rule 14 K."
},  
{  
    Compliance_Id: 3248,
    IHRC_Company_Name: "",
    Location: "EFG - Office - Begusarai - sadtpur - HR/ Begusarai/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Annual Fire Audit",
    Compliance_Description: "Conduct an annual fire audit and submit the report to the local fire department.",
    Penalty_Description: "Fine which may extend to Rs. 3000",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Submit the fire audit report annually to the local fire department.",
    Compliance_Clause: "Section 18 and Rule 15 L."
},  
{  
    Compliance_Id: 3249,
    IHRC_Company_Name: "",
    Location: "HIJ - Office - Jehanabad - sadtpur - HR/ Jehanabad/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Employee Grievance Redressal",
    Compliance_Description: "Establish a grievance redressal mechanism for employees and document the grievances.",
    Penalty_Description: "Fine which may extend to Rs. 1500",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Set up a grievance redressal committee and keep records of all grievances filed by employees.",
    Compliance_Clause: "Section 19 and Rule 16 M."
},  
{  
    Compliance_Id: 3250,
    IHRC_Company_Name: "",
    Location: "KLM - Office - Buxar - sadtpur - HR/ Buxar/ Bihar/ Office",
    Legislation: "Bihar Shops and Establishments Act, 1953 and Bihar Shops Establishments Rules, 1955/ Bihar/ IR",
    Compliance_Categorization: "LICENSE / REGISTRATION",
    Compliance_Header: "Workplace Safety Audit",
    Compliance_Description: "Conduct a workplace safety audit every year and implement the recommendations.",
    Penalty_Description: "Fine which may extend to Rs. 4000",
    Compliance_Applicability: "EVERY EMPLOYER",
    Bare_Act_Text: "Ensure that the workplace safety audit is conducted annually and the findings are acted upon.",
    Compliance_Clause: "Section 20 and Rule 17 N."
},  
];

const categorizationColor: Record<string, { label: string, dotClass: string, textClass: string }> = {
    'LICENSE / REGISTRATION': {
        label: 'License / Registration',
        dotClass: 'bg-emerald-500',
        textClass: 'text-emerald-500',
    },
    // Add more categories as needed
}


const ViewDetailsButton = ({ compliance }: { compliance: DataRow }) => {
    const navigate = useNavigate()

    const handleViewDetails = () => {
        navigate(`/app/IHRC/compliance-list-detail/${compliance.Compliance_Id}`, {
            state: compliance,
        })
    }

    return (
        <Button size="sm" variant="solid" onClick={handleViewDetails}>
            View Details
        </Button>
    )
}

const ComplianceTableContent: React.FC = () => {
    const navigate = useNavigate()

    const columns: ColumnDef<DataRow>[] = useMemo(
        () => [
            {
                header: 'Compliance ID',
                accessorKey: 'Compliance_Id',
            },
            {
                header: 'Location',
                accessorKey: 'Location',
                cell: (props) => {
                    const { Location } = props.row.original
                    return <span className="capitalize">{Location.split(' - ')[2]}</span>
                },
            },
            {
                header: 'Categorization',
                accessorKey: 'Compliance_Categorization',
                cell: (props) => {
                    const { Compliance_Categorization } = props.row.original
                    return (
                        <div className="flex items-center gap-2">
                            <Badge
                                className={
                                    categorizationColor[Compliance_Categorization]?.dotClass
                                }
                            />
                            <span
                                className={`capitalize font-semibold ${categorizationColor[Compliance_Categorization]?.textClass}`}
                            >
                                {categorizationColor[Compliance_Categorization]?.label}
                            </span>
                        </div>
                    )
                },
            },
            {
              header: 'Description',
              accessorKey: 'Compliance_Description',
              cell: (props) => {
                  const { Compliance_Description } = props.row.original
                  const maxLength = 40
                  const truncatedDescription = Compliance_Description.length > maxLength
                      ? Compliance_Description.substring(0, maxLength) + '...'
                      : Compliance_Description
                  return (
                      <span title={Compliance_Description} className="block max-w-md truncate">
                          {truncatedDescription}
                      </span>
                  )
              },
            },
            {
                header: '',
                id: 'viewDetails',
                cell: (props) => (
                    <ViewDetailsButton compliance={props.row.original} />

                ),
            },
        ],
        [navigate]
    )

    const [tableData, setTableData] = useState({
        total: dummyData.length,
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
        <DataTable
            columns={columns}
            data={dummyData}
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
    )
}

export default ComplianceTableContent