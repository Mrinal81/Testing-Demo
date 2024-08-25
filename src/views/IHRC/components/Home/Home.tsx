import React, { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from 'apexcharts'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Table, Card, Timeline, ScrollBar, Dialog} from '../../../../components/ui';
import THead from '@/components/ui/Table/THead';
import TBody from '@/components/ui/Table/TBody';
import TimeLineItem from '@/components/ui/Timeline/TimeLineItem';


// export const COLORS: string[] = ['#f57600', '#10b981'];


const Topcontent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 flex items-center border rounded-lg">
        <div className='bg-[#cffafe] p-2 rounded-lg h-14 w-14 flex items-center justify-center mr-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(8,145,178,1)" width="28" height="28"><path d="M17 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H7V0H9V2H15V0H17V2ZM17 4V6H15V4H9V6H7V4H5V20H19V4H17ZM7 8H17V10H7V8ZM7 12H17V14H7V12Z"></path></svg>
        </div>
        <div>
          <h3 className='font-semibold text-lg'>Compliances</h3>
          <p className='font-medium text-[#7583a2]'>159</p>
        </div>
      </div>

      <div className="bg-white p-4 flex items-center border rounded-lg">
        <div className='bg-[#e0e7ff] p-2 rounded-lg h-14 w-14 flex items-center justify-center mr-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(79,70,229,1)" width="28" height="28"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" ></path></svg>
        </div>
        <div>
          <h3 className='font-semibold text-lg'>Location</h3>
          <p className='font-medium text-[#7583a2]'>3</p>
        </div>
      </div>

      <div className="bg-white p-4 flex items-center border rounded-lg">
        <div className='bg-[#fef3c7] p-2 rounded-lg h-14 w-14 flex items-center justify-center mr-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(217,119,6,1)" width="28" height="28"><path d="M7 1V3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H10.7546C9.65672 19.6304 9 17.8919 9 16C9 11.5817 12.5817 8 17 8C18.8919 8 20.6304 8.65672 22 9.75463V4C22 3.44772 21.5523 3 21 3H17V1H15V3H9V1H7ZM23 16C23 19.3137 20.3137 22 17 22C13.6863 22 11 19.3137 11 16C11 12.6863 13.6863 10 17 10C20.3137 10 23 12.6863 23 16ZM16 12V16.4142L18.2929 18.7071L19.7071 17.2929L18 15.5858V12H16Z"></path></svg>
        </div>
        <div>
          <h3 className='font-semibold text-lg'>Upcoming</h3>
          <p className='font-medium text-[#7583a2]'>457</p>
        </div>
      </div>

      <div className="bg-white p-4 flex items-center border rounded-lg">
        <div className='bg-[#d1fae5] p-2 rounded-lg h-14 w-14 flex items-center justify-center mr-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(5,150,105,1)" width="28" height="28"><path d="M6 4H4V2H20V4H18V6C18 7.61543 17.1838 8.91468 16.1561 9.97667C15.4532 10.703 14.598 11.372 13.7309 12C14.598 12.628 15.4532 13.297 16.1561 14.0233C17.1838 15.0853 18 16.3846 18 18V20H20V22H4V20H6V18C6 16.3846 6.81616 15.0853 7.8439 14.0233C8.54682 13.297 9.40202 12.628 10.2691 12C9.40202 11.372 8.54682 10.703 7.8439 9.97667C6.81616 8.91468 6 7.61543 6 6V4ZM8 4V6C8 6.68514 8.26026 7.33499 8.77131 8H15.2287C15.7397 7.33499 16 6.68514 16 6V4H8ZM12 13.2219C10.9548 13.9602 10.008 14.663 9.2811 15.4142C9.09008 15.6116 8.92007 15.8064 8.77131 16H15.2287C15.0799 15.8064 14.9099 15.6116 14.7189 15.4142C13.992 14.663 13.0452 13.9602 12 13.2219Z"></path></svg>
        </div>
        <div>
          <h3 className='font-semibold text-lg'>Overdue</h3>
          <p className='font-medium text-[#7583a2]'>580</p>
        </div>
      </div>
    </div>
  )
}

const AbstractPieChart = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'pie',
      height: 350,
      toolbar: {
        show: true,
      },
    },
    title: {
      text: 'Click on graph to view details',
      align: 'center',
      style: {
        fontSize: '14px',
        fontWeight: '200',
      },
    },
    labels: ['Displayed', 'Not Displayed'], // Labels are still required for proper data binding
    legend: {
      show: true,
      position: 'bottom',
      labels: {
        colors: '#000', // Text color for legend
      },
      markers: {
        fillColors: ['#0000FF', '#f57600'],
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 0, // Show labels for very small slices
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        colors: ['#fff'], // Color for the data labels
      },
      formatter: (val: string | number | number[], opts?: any): string | number => {
        // Handle case where val is a number
        if (typeof val === 'number') {
          return Math.floor(val); // Show only the integer part of the value
        }
        // Handle case where val is an array or string
        return typeof val === 'string' ? val : ''; // Default return empty string if not handled
      },
    },
    series: [10, 100],
    colors: ['#0000FF', '#f57600'],
  }

  return (
    <div className='w-full h-[350px] px-8 py-6'>
      <ReactApexChart options={options} series={[10, 100]} type="pie" height={350} />
    </div>
  )
}
const Abstract = () => {
  return (
    <div className='border rounded-lg'>
        <div className='p-4'>
            <h1 className='font-semibold text-lg'>Abstract Summary</h1>
        </div>
        <div className='flex-grow flex items-center justify-center'>
          <AbstractPieChart />
        </div>
    </div>
  )
}

const MonthlyColumnchart = () => {
  const data = [
      {
          name: 'Not Completed',
          data: [40, 80, 70, 90, 60, 99],
      },
      {
          name: 'Completed',
          data: [100, 120, 40, 150, 100, 60],
      },
  ]

  return (
      <div className="w-full h-[350px] px-6">

      
      <Chart
          options={{
              chart: {
                  stacked: true,
                  toolbar: {
                      show: true,
                  },
              },
              colors: ['#f57600', '#10b981'],
              responsive: [
                  {
                      breakpoint: 480,
                      options: {
                          legend: {
                              position: 'bottom',
                              offsetX: -10,
                              offsetY: 0,
                          },
                          markers: {
                              shape: 'circle',
                            },
                      },
                  },
              ],
              plotOptions: {
                  bar: {
                      horizontal: false,
                  },
              },
              xaxis: {
                  type: 'category',
                  categories: [
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                  ],
              },
              legend: {
                  position: 'bottom',
                  offsetY: 0,
                  markers: {
                      shape: 'circle',
                      
                    },
                    itemMargin: {
                      horizontal: 20, 
                      vertical: 10, 
                    },
              },
              markers: {
                  shape: 'circle',
                  
                },
              fill: {
                  opacity: 1,
              },
          }}
          series={data}
          type="bar"
          height={340}
      />
      </div>
  )
}
const MonthSummary = () => {
  return (
    <div className='border rounded-lg'>
        <div className='p-4'>
            <h1 className='font-semibold text-lg'>Month Wise Summary</h1>
        </div>
        <div className='flex-grow flex items-center justify-center'>
        <MonthlyColumnchart />
        </div>
    </div>
  )
}

const PerformancePieChart = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'donut',
      height: 350,
      toolbar: {
        show: true,
      },
    },
    title: {
      text: 'Click on graph to view details',
      align: 'center',
      style: {
        fontSize: '14px',
        fontWeight: '200',
      },
    },
    labels: ['Completed', 'Not Completed', 'Not Applicable'],
    legend: {
      show: true,
      position: 'bottom',
      labels: {
        colors: '#000',
      },
      markers: {
        fillColors: ['#0000FF', '#f57600', '#e5c354'],
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 0,
        },
      },
      donut: {
        size: '65%', // Adjust this value to change the size of the donut hole
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
      },
    },
    series: [219, 627, 0], // Added 0 for 'Not Applicable' to match the number of labels
    colors: ['#0000FF', '#f57600', '#e5c354'],
  }

  return (
    <div className='w-full h-[350px] px-8 py-6'>
      <ReactApexChart 
        options={options} 
        series={options.series} 
        type="donut" 
        height={350} 
      />
    </div>
  )
}
const Performance = () => {

  return (
    <div className='border rounded-xl'>
      <div className='p-4'>
        <h1 className='font-semibold text-lg'>Performance Summary</h1>
      </div>
      <div className='flex-grow flex items-center justify-center'>
      {/* <PieChart containerID="performance-chart" /> */}
      <PerformancePieChart />
      </div>
    </div>
  );
};

const RiskColumnChart = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar', // Corrected type: must match one of the specific string literals
      height: 350,
      width: 500,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '45%',
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: ['High', 'Medium', 'Low'],
    },
    yaxis: {
      title: {
        text: 'Number of Compliances',
        style: {
            // fontWeight: '500',
            fontSize: '12px',
        }
      },
    },
    legend: {
      show: true,
      markers: {
        shape: 'circle' as 'circle',
        
      },
      itemMargin: {
        horizontal: 20, // Space between legend items horizontally
        vertical: 10, // Space between legend items vertically
      },
      
    },
    fill: {
      opacity: 1,
    },
    title: {
      text: 'Click on graph to view details',
      align: 'center',
      style: {
        fontSize: '14px',
        fontWeight: '200',
      },
    },
    colors: ['#f57600', '#0000FF', '#10b981'],
  }

  const series = [
    {
      name: 'Not Applicable',
      data: [0, 447, 61],
      color: '#0000FF',
    },
    {
        name: 'Not Completed',
        data: [173, 0, 0],
        color: '#f57600',
    },
    {
        name: 'Completed',
        data: [25, 139, 0],
        color: '#10b981'
    },
  ]

  return (
    <div className='w-[500px] h-[350px]'>
      <ReactApexChart options={options} series={series} type="bar" height={350} width={500} />
    </div>
  )
}
const Risk = () => {
  return (
    <div className='border rounded-xl'>
    <div className='p-4'>
        <h1 className='font-semibold text-lg'>Risk Summary</h1>
    </div>
    <div className='flex-grow flex items-center justify-center'>
    <RiskColumnChart />
    </div>
</div>
  )
}

const Statutes = () => {
  const paragraphs = [
  "Kerala Panchayat Raj Act, 1994 and Kerala Panchayat Raj (Profession Tax) Rules, 1996",
  "Apprentices Act, 1961 and Apprenticeship Rules, 1992",
  "Contract Labour (Regulation and Abolition) Act, 1970 & Bihar Contract Labour (Regulation and Abolition) Rules, 1972 (Applicable to Jharkhand)",
  "Factories Act, 1948 and State Factories Rules",
  "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
  "Payment of Gratuity Act, 1972 and Payment of Gratuity (Central) Rules, 1972",
  "Minimum Wages Act, 1948 and State Minimum Wages Rules",
  "Payment of Wages Act, 1936 and State Payment of Wages Rules",
  "Industrial Disputes Act, 1947 and Industrial Disputes (Central) Rules, 1957",
  "Maternity Benefit Act, 1961 and Maternity Benefit (Mines and Circus) Rules, 1963",
  "Equal Remuneration Act, 1976 and Equal Remuneration Rules, 1976",
  "Employee's Compensation Act, 1923 (formerly Workmen's Compensation Act)",
  "Child and Adolescent Labour (Prohibition and Regulation) Act, 1986",
  "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
  "Trade Unions Act, 1926 and Trade Unions Regulations, 1938"
  ];

  return (
    <div className='border rounded-lg'>
      <div className='p-4'>
        <h1 className='font-semibold text-lg'>Applicable Statutes ({paragraphs.length})</h1>
      </div>
      <div className='h-[350px] py-4'>
        <ScrollBar autoHide>
          <div className='px-4'>
            <Timeline>
              {paragraphs.map((paragraph, index) => (
                <TimeLineItem
                  key={index}
                  media={<div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white" />}
                >
                  <p className='text-sm text-[#7583a2]'>{paragraph}</p>
                </TimeLineItem>
              ))}
            </Timeline>
          </div>
        </ScrollBar>
      </div>
    </div>
  );
};


export interface Data {
    id: number;
    title: string;
    content: string;
    date: string;
    lawDescription: string;
    keyPoints: string[];
    effectiveDate: string;
}

export const UpdateData: Data[] = [
  {
    id: 1,
    title: "Income Tax Act Amendment",
    content: "Recent amendments to the Income Tax Act have introduced new provisions for claiming deductions on work-from-home expenses.",
    date: "2024-08-15",
    lawDescription: "The Income Tax Act Amendment of 2024 modernizes tax regulations to accommodate evolving work environments, particularly focusing on remote work scenarios.",
    keyPoints: [
      "New deductions available for work-from-home expenses",
      "Changed thresholds for existing deductions",
      "Introduction of digital receipt submission for claims",
      "Modified tax slabs for remote workers"
    ],
    effectiveDate: "2024-09-01",
  },
  {
    id: 2,
    title: "GST Compliance Updates",
    content: "The GST Council has approved changes to simplify the return filing process and introduce an automated refund system.",
    date: "2024-07-20",
    lawDescription: "These updates to the Goods and Services Tax (GST) framework aim to reduce compliance burden on businesses and improve the efficiency of the tax administration system.",
    keyPoints: [
      "Simplified monthly return form",
      "Automated input tax credit reconciliation",
      "New system for faster processing of refunds",
      "Enhanced data analytics for fraud detection"
    ],
    effectiveDate: "2024-10-01",
  },
  {
    id: 3,
    title: "Corporate Governance Code Revisions",
    content: "The Securities and Exchange Board has revised the Corporate Governance Code to enhance board independence and stakeholder protection.",
    date: "2024-06-30",
    lawDescription: "These revisions aim to strengthen corporate governance practices in listed companies, ensuring better protection of shareholder interests and improved transparency.",
    keyPoints: [
      "Increased proportion of independent directors required",
      "Enhanced disclosure requirements for related party transactions",
      "Mandatory cybersecurity risk assessments",
      "New guidelines for environmental and social responsibility reporting"
    ],
    effectiveDate: "2025-01-01",
  },
  {
    id: 4,
    title: "Data Protection Act Implementation",
    content: "The comprehensive Data Protection Act is set to come into force, introducing stringent rules for data handling and privacy.",
    date: "2024-09-05",
    lawDescription: "This landmark legislation establishes a robust framework for data protection, privacy rights, and data processing responsibilities for organizations operating in the digital economy.",
    keyPoints: [
      "Appointment of Data Protection Officers mandatory for certain organizations",
      "Strict consent requirements for data collection and processing",
      "Heavy penalties for data breaches and non-compliance",
      "New rights for individuals regarding their personal data"
    ],
    effectiveDate: "2025-03-01",
  },
  {
    id: 5,
    title: "Labor Code Consolidation",
    content: "The government has consolidated multiple labor laws into a single Labor Code to simplify compliance and enhance worker protections.",
    date: "2024-08-22",
    lawDescription: "This comprehensive Labor Code consolidates and updates various existing labor laws, aiming to balance worker rights with ease of doing business.",
    keyPoints: [
      "Unified definition of wages across all labor laws",
      "New provisions for gig and platform workers",
      "Simplified registration and filing procedures for establishments",
      "Enhanced maternity and paternity benefits"
    ],
    effectiveDate: "2025-04-01",
  },
  {
    id: 6,
    title: "Environmental Protection Act Amendments",
    content: "Significant amendments to the Environmental Protection Act introduce stricter norms for industrial emissions and waste management.",
    date: "2024-07-10",
    lawDescription: "These amendments aim to address growing environmental concerns by imposing more stringent regulations on industries and promoting sustainable practices.",
    keyPoints: [
      "Reduced emission limits for various pollutants",
      "Mandatory environmental impact assessments for more categories of projects",
      "Increased penalties for environmental violations",
      "New incentives for adoption of green technologies"
    ],
    effectiveDate: "2024-12-01",
  },
  {
    id: 7,
    title: "Digital Currency Regulations",
    content: "The central bank has issued new regulations governing the use and trading of digital currencies, including cryptocurrencies.",
    date: "2024-09-15",
    lawDescription: "These regulations aim to bring digital currencies under a formal regulatory framework, ensuring financial stability while fostering innovation in the fintech sector.",
    keyPoints: [
      "Licensing requirements for cryptocurrency exchanges",
      "Know Your Customer (KYC) norms for digital currency transactions",
      "Restrictions on use of cryptocurrencies for payments",
      "Tax implications clarified for crypto trading and mining"
    ],
    effectiveDate: "2025-01-15",
  },
  {
    id: 8,
    title: "Intellectual Property Rights Expansion",
    content: "New amendments to Intellectual Property laws expand protection to include AI-generated works and traditional knowledge.",
    date: "2024-08-05",
    lawDescription: "These amendments modernize the IP framework to address emerging technologies and recognize the value of traditional knowledge in innovation.",
    keyPoints: [
      "Copyright protection extended to AI-generated content",
      "New category of rights for traditional knowledge and cultural expressions",
      "Simplified patent application process for startups",
      "Increased duration of design protection"
    ],
    effectiveDate: "2024-11-01",
  },
  {
    id: 9,
    title: "Foreign Investment Policy Updates",
    content: "The government has announced updates to the Foreign Direct Investment (FDI) policy, easing norms in several sectors.",
    date: "2024-07-25",
    lawDescription: "These policy updates aim to attract more foreign investment by liberalizing FDI norms across various sectors of the economy.",
    keyPoints: [
      "100% FDI allowed in contract manufacturing sector",
      "Eased local sourcing norms for single-brand retail",
      "Simplified approval process for investments in sensitive sectors",
      "New incentives for investments in underdeveloped regions"
    ],
    effectiveDate: "2024-10-15",
  },
  {
    id: 10,
    title: "Healthcare Regulation Overhaul",
    content: "A comprehensive overhaul of healthcare regulations introduces new standards for telemedicine, medical devices, and health data management.",
    date: "2024-09-20",
    lawDescription: "This regulatory overhaul aims to modernize the healthcare system, improve patient safety, and facilitate the adoption of new medical technologies.",
    keyPoints: [
      "New framework for telemedicine services",
      "Stricter quality control measures for medical devices",
      "Enhanced data protection rules for health information",
      "Mandatory continuous medical education for healthcare professionals"
    ],
    effectiveDate: "2025-06-01",
  }
];

const Updates = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  function PrevArrow({ className, style, onClick }: ArrowProps) {
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-30px", top: "100px" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(146,151,161,1)" width="30" height="30">
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>
      </div>
    );
  }
  
  function NextArrow({ className, style, onClick }: ArrowProps) {
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "-15px", top: "100px"}}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(146,151,161,1)" width="30" height="30"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
      </div>
    );
  }


  return (
    <div className='border rounded-lg'>
      <div className='p-4'>
        <h1 className='font-semibold text-lg'>Daily Updates</h1>
      </div>
      <div className='flex-grow flex items-center justify-center h-[350px]'>
        <div className='w-full px-8'>
          <Slider {...settings}>
            {UpdateData.map((item: Data, index: number) => (
              <div key={index} className="px-2" onClick={() => handleCardClick(item)}>
                <Card
                  className='h-[280px] cursor-pointer'
                  bodyClass='flex flex-col h-full'
                  header={
                    <div className='flex justify-around'>
                      <button className='bg-indigo-100 p-2 rounded-full text-sm font-medium text-indigo-300 h-6 flex items-center'>Commercial</button>
                      <button className='bg-indigo-100 p-2 rounded-full text-sm font-medium text-indigo-300 h-6 flex items-center'>Central</button>
                    </div>
                  }
                  headerClass='pb-0'
                  headerBorder={false}
                >
                  <div className='flex flex-col h-full'>
                    <h2 className='font-semibold text-lg mt-5'>{item.title}</h2>
                    <span className='text-xs text-gray-400'>{item.date}</span>
                    <p className='text-sm mt-4 flex-grow overflow-hidden text-[#7583a2]'>{item.content}</p>
                    <div className='mt-2 text-xs text-gray-500 flex justify-between'>
                      <p className='text-[#7583a2]'>Read more</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {selectedItem && (
        <DetailPopup
          item={selectedItem}
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        />
      )}
    </div>
  )
}


const DetailPopup = ({ item, isOpen, onClose }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      closable={true}
      width={800} // Adjust as needed
      height="auto"
      contentClassName="p-6"
    >
      <div className="max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
        <p className="text-sm text-gray-600 mb-2">Update Date: {item.date}</p>
        <p className="text-sm text-gray-600 mb-4">Effective Date: {item.effectiveDate}</p>
        
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-base mb-4">{item.lawDescription}</p>
        
        <h3 className="text-xl font-semibold mb-2">Key Points</h3>
        <ul className="list-disc list-inside mb-4">
          {item.keyPoints.map((point, index) => (
            <li key={index} className="mb-2">{point}</li>
          ))}
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Summary of Changes</h3>
        <p className="text-base mb-4">{item.content}</p>
      </div>
    </Dialog>
  );
};


const Calendar: React.FC = () => {
  const [currentMonthCompliance, setCurrentMonthCompliance] = useState<{ date: string; description: string }[]>([]);

  return (
    <div className='border rounded-lg'>
      <div className='p-4'>
        <h1 className='font-semibold text-lg'>My Compliance Calendar</h1>
      </div>
      <div className='h-[350px] flex-grow flex items-center gap-10 px-4'>
        <CalendarView onComplianceChange={setCurrentMonthCompliance} />
        <div className='w-[60%]'>
          <Holiday complianceDeadlines={currentMonthCompliance} />
        </div>
      </div>
    </div>
  );
}

interface DateObject {
  currentMonth: boolean;
  date: Dayjs;
  today?: boolean;
}

const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
): DateObject[] => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf('month');
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month');

  const arrayOfDate: DateObject[] = [];

  // Create prefix dates
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    const date = firstDateOfMonth.day(i);
    arrayOfDate.push({
      currentMonth: false,
      date,
    });
  }

  // Generate current dates
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: firstDateOfMonth.date(i),
      today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString(),
    });
  }

  // Fill remaining days
  const remaining = 42 - arrayOfDate.length;
  for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++) {
    arrayOfDate.push({
      currentMonth: false,
      date: lastDateOfMonth.date(i),
    });
  }

  return arrayOfDate;
};

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
];

const CalendarView: React.FC<{ onComplianceChange: (deadlines: { date: string; description: string }[]) => void }> = ({ onComplianceChange }) => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const [dates, setDates] = useState<DateObject[]>([]);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  useEffect(() => {
    setDates(generateDate(currentDate.month(), currentDate.year()));
  }, [currentDate]);

  // Mock compliance deadlines
  const complianceDeadlines = [
    { date: '2024-08-01', description: 'Monthly Financial Report Due' },
    { date: '2024-08-15', description: 'Quarterly Report Due' },
    { date: '2024-08-20', description: 'Annual Safety Review Submission' },
    { date: '2024-08-30', description: 'Tax Filing Deadline' },
    { date: '2024-09-01', description: 'Quarterly Tax Payments Due' },
    { date: '2024-09-15', description: 'Quarterly Report Due' },
    { date: '2024-09-30', description: 'Tax Filing Deadline' },
    { date: '2024-10-01', description: 'Annual Employee Benefits Enrollment' },
    { date: '2024-10-15', description: 'Quarterly Report Due' },
    { date: '2024-10-31', description: 'End of Fiscal Year Review' },
    { date: '2024-11-01', description: 'Monthly Financial Report Due' },
    { date: '2024-11-15', description: 'Quarterly Report Due' },
    { date: '2024-11-30', description: 'Annual Tax Planning Deadline' },
    { date: '2024-12-01', description: 'Year-End Compliance Review' },
    { date: '2024-12-15', description: 'Quarterly Report Due' },
    { date: '2024-12-31', description: 'End of Year Tax Filing Deadline' },
  ];

  const currentMonthDeadlines = complianceDeadlines.filter(
    deadline => dayjs(deadline.date).isSame(currentDate, 'month')
  );

  useEffect(() => {
    onComplianceChange(currentMonthDeadlines);
  }, [currentDate]);

  const hasCompliance = (date: Dayjs) => {
    return currentMonthDeadlines.some(
      (deadline) => dayjs(deadline.date).isSame(date, 'day')
    );
  };

  return (
    <div className="calendar-container border rounded-xl h-[290px] w-[40%] p-4 overflow-hidden">
      <div>
        <div className="calendar-header flex justify-between items-center mb-2">
          <button onClick={handlePrevMonth}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(146,151,161,1)" width="22" height="22">
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </button>
          <div className="month-year text-lg font-semibold text-black">
            {months[currentDate.month()]} {currentDate.year()}
          </div>
          <button onClick={handleNextMonth}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(146,151,161,1)" width="22" height="22">
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 max-h-[250px] text-[#737a88]">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-bold">
              {day}
            </div>
          ))}
          {dates.map((dateObj, index) => (
            <div
              key={index}
              className={`text-center p-2 rounded-lg ${dateObj.today ? 'bg-blue-500 text-[#fff]' : ''} ${!dateObj.currentMonth ? 'text-gray-400' : 'text-[#5e5d6a]'} ${hasCompliance(dateObj.date) ? 'bg-red-500 text-[#fff]' : ''}`}
            >
              {dateObj.date.date()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface HolidayProps {
  complianceDeadlines: { date: string; description: string }[];
}

const Holiday: React.FC<HolidayProps> = ({ complianceDeadlines }) => {
  return (
    <div className="p-4 border w-full rounded-lg h-[290px]">
      <ScrollBar autoHide>
      <h2 className="font-semibold text-lg mb-2">Compliance Deadlines</h2>
        {complianceDeadlines.length === 0 ? (
          <div className='flex justify-center items-center mt-20 text-[#7583a2] font-bold'>
            <p>No compliance deadlines for this month.</p>
          </div>
        ) : (
          <Table className="w-full border-collapse mt-6">
            <THead>
              <tr className='bg-[#f9fafb] text-[#737a88]'>
                <th className="border-b p-2 text-left font-medium">S.NO</th>
                <th className="border-b p-2 text-left font-medium">DATE</th>
                <th className="border-b p-2 text-left font-medium">DESCRIPTION</th>
                <th className="border-b p-2 text-left font-medium">STATUS</th>
              </tr>
            </THead>
            <TBody>
              {complianceDeadlines.map((deadline, index) => (
                <tr key={index} className='text-[#7583a2] text-sm'>
                  <td className="border-b p-2 text-left">{index + 1}</td>
                  <td className="border-b p-2 text-left">{dayjs(deadline.date).format('DD MMM YYYY')}</td>
                  <td className="border-b p-2 text-left">{deadline.description}</td>
                  <td className="border-b p-2 text-left">Pending</td> {/* Update status based on your requirements */}
                </tr>
              ))}
            </TBody>
          </Table>
        )}
      </ScrollBar>
    </div>
  );
}


const DashboardMiddle = () => {
  return (
    <div className="grid grid-cols-2 gap-4 overflow-y-auto">
            <div className="col-span-1 rounded-lg"><Performance /></div>
            <div className="col-span-1 rounded-lg"><Risk /></div>
            <div className="col-span-1 rounded-lg"><MonthSummary /></div>
            <div className="col-span-1 rounded-lg"><Statutes /></div>
            <div className="col-span-2 rounded-lg"><Calendar /></div>
            <div className="grid grid-cols-3 col-span-2 gap-4">
              <div className="col-span-1 rounded-lg"><Abstract /></div>
              <div className="col-span-2 rounded-lg"><Updates /></div>
            </div>
    </div> 
  )
}



const Home = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
      <div>
      <Topcontent />
      </div>
      <div>
      <DashboardMiddle />
      </div>
    </div>
  )
}

export default Home