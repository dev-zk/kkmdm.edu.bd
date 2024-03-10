"use client"
// components/BanglaCalendar.js
// import React, { useState } from 'react';

// const BanglaCalendar = () => {
//   // Define Bengali months
//   const banglaMonths = [
//     'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
//     'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
//   ];

//   // Function to get Bangla year and month
//   const getBanglaYearMonth = () => {
//     const currentDate = new Date();
//     const gregorianYear = currentDate.getFullYear();
//     const baseGregorianYear = 2010; // Base year for Bengali calendar
//     const baseBanglaYear = 2011; // Base year for Bengali calendar
//     const differenceYears = gregorianYear - baseGregorianYear;
//     const banglaYear = baseBanglaYear + differenceYears;
//     const banglaMonth = banglaMonths[currentDate.getMonth()];
//     return { banglaYear, banglaMonth };
//   };

//   // State to keep track of highlighted date
//   const [highlightedDate, setHighlightedDate] = useState(1);

//   // Function to handle changing date
//   const changeDate = (increment) => {
//     const newDate = highlightedDate + increment;
//     if (newDate >= 1 && newDate <= 31) {
//       setHighlightedDate(newDate);
//     }
//   };

//   // Get current Bangla year and month
//   const { banglaYear, banglaMonth } = getBanglaYearMonth();

//   // Function to get number of days in Bangla month
//   const getDaysInBanglaMonth = () => {
//     switch (banglaMonth) {
//       case 'বৈশাখ':
//       case 'জ্যৈষ্ঠ':
//       case 'আষাঢ়':
//       case 'শ্রাবণ':
//       case 'ভাদ্র':
//       case 'আশ্বিন':
//         return 31;
//       case 'কার্তিক':
//       case 'অগ্রহায়ণ':
//       case 'পৌষ':
//       case 'মাঘ':
//       case 'ফাল্গুন':
//       case 'চৈত্র':
//         return 30;
//       default:
//         return 0;
//     }
//   };

//   const daysInMonth = getDaysInBanglaMonth();

//   return (
//     <div className="bg-white dark:bg-black shadow-xl overflow-hidden rounded-lg mx-auto mt-8 text-gray-900 font-semibold text-center">
//       <div className="flex items-center justify-around px-4 py-6">
//         <button className="p-4 rounded-md bg-indigo-200 text-indigo-600" onClick={() => changeDate(-1)}>
//           <svg className="w-4 h-4 stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
//         </button>
//         <div className="text-lg">
//           {banglaMonth}, {banglaYear}
//           <br />
//           {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
//         </div>
//         <button className="p-4 rounded-md bg-indigo-200 text-indigo-600" onClick={() => changeDate(1)}>
//           <svg className="w-4 h-4 stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
//         </button>
//       </div>
//       <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-6 gap-1">
//         <div className="text-indigo-600">সোম</div>
//         <div className="text-indigo-600">মঙ্গল</div>
//         <div className="text-indigo-600">বুধ</div>
//         <div className="text-indigo-600">বৃহঃ</div>
//         <div className="text-indigo-600">শুক্র</div>
//         <div className="text-indigo-600">শনি</div>
//         <div className="text-indigo-600">রবি</div>
//         {[...Array(daysInMonth).keys()].map((date) => (
//           <a
//             key={date + 1}
//             href="#"
//             className={`hover:bg-indigo-100 rounded-md p-2 ${highlightedDate === date + 1 ? 'bg-indigo-500 text-white' : 'text-gray-500'}`}
//             onClick={() => setHighlightedDate(date + 1)}
//           >
//             {date + 1}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BanglaCalendar;

// import React, { useState } from 'react';

// const BanglaCalendar = ({ setHighlightedDate }) => {
//   // Define Bengali months
//   const banglaMonths = [
//     'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
//     'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
//   ];

//   // Define English months
//   const englishMonths = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   // Function to get Bangla year and month
//   const getBanglaYearMonth = () => {
//     const currentDate = new Date();
//     const gregorianYear = currentDate.getFullYear();
//     const baseGregorianYear = 1941; // Base year for Bengali calendar
//     const baseBanglaYear = 1350; // Base year for Bengali calendar
//     const differenceYears = gregorianYear - baseGregorianYear;
//     const banglaYear = baseBanglaYear + differenceYears;
//     const banglaMonth = banglaMonths[currentDate.getMonth()];
//     const englishMonth = englishMonths[currentDate.getMonth()];
//     return { banglaYear, banglaMonth, englishMonth };
//   };

//   // Get current Bangla year and month
//   const { banglaYear, banglaMonth, englishMonth } = getBanglaYearMonth();

//   // Function to get number of days in Bangla month
//   const getDaysInBanglaMonth = () => {
//     switch (banglaMonth) {
//       case 'বৈশাখ':
//       case 'জ্যৈষ্ঠ':
//       case 'আষাঢ়':
//       case 'শ্রাবণ':
//       case 'ভাদ্র':
//       case 'আশ্বিন':
//         return 31;
//       case 'কার্তিক':
//       case 'অগ্রহায়ণ':
//       case 'পৌষ':
//       case 'মাঘ':
//       case 'ফাল্গুন':
//       case 'চৈত্র':
//         return 30;
//       default:
//         return 0;
//     }
//   };

//   const daysInMonth = getDaysInBanglaMonth();

//   return (
//     <div className="bg-white shadow-xl overflow-hidden rounded-lg mx-auto mt-8 text-gray-900 font-semibold text-center">
//       <div className="flex items-center justify-around px-4 py-6">
//         <div className="text-lg">{banglaMonth}, {banglaYear} ({englishMonth})</div>
//       </div>
//       <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-6 gap-1">
//         <div className="text-indigo-600">সোম</div>
//         <div className="text-indigo-600">মঙ্গল</div>
//         <div className="text-indigo-600">বুধ</div>
//         <div className="text-indigo-600">বৃহঃ</div>
//         <div className="text-indigo-600">শুক্র</div>
//         <div className="text-indigo-600">শনি</div>
//         <div className="text-indigo-600">রবি</div>
//         {[...Array(daysInMonth).keys()].map((date) => (
//           <a
//             key={date + 1}
//             href="#"
//             className={`hover:bg-indigo-100 rounded-md p-2`}
//             onClick={() => setHighlightedDate(date + 1)}
//           >
//             {date + 1}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// const DatePicker = () => {
//   const [highlightedDate, setHighlightedDate] = useState(1);

//   return (
//     <div className="relative max-w-sm">
//       <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//           <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
//         </svg>
//       </div>
//       <input 
//         type="text" 
//         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
//         placeholder="Select date" 
//         readOnly
//         value={`${highlightedDate} ${banglaMonths[new Date().getMonth()]}, ${new Date().getFullYear()}`}
//       />
//       <BanglaCalendar setHighlightedDate={setHighlightedDate} />
//     </div>
//   );
// };

// // export default DatePicker;

// export default BanglaCalendar


// import { Calendar } from 'rsuite';

// const BanglaCalendar = () => {
//   return (
//     <>
//       <style>
//         {`
//       .bg-gray {
//         background-color: rgba(242, 242, 242, 0.3);
//       }
//       `}
//       </style>
//       <Calendar bordered cellClassName={date => (date.getDay() % 2 ? 'bg-gray' : undefined)} />
//     </>
//   );
// }

// export default BanglaCalendar;



// import { Calendar, Badge } from 'rsuite';

// function getTodoList(date) {
//   const day = date.getDate();

//   switch (day) {
//     case 10:
//       return [
//         { time: '10:30 am', title: 'Meeting' },
//         { time: '12:00 pm', title: 'Lunch' }
//       ];
//     case 15:
//       return [
//         { time: '09:30 pm', title: 'Products Introduction Meeting' },
//         { time: '12:30 pm', title: 'Client entertaining' },
//         { time: '02:00 pm', title: 'Product design discussion' },
//         { time: '05:00 pm', title: 'Product test and acceptance' },
//         { time: '06:30 pm', title: 'Reporting' },
//         { time: '10:00 pm', title: 'Going home to walk the dog' }
//       ];
//     default:
//       return [];
//   }
// }

// const BanglaCalendar = () => {
//   function renderCell(date) {
//     const list = getTodoList(date);

//     if (list.length) {
//       return <Badge className="calendar-todo-item-badge" />;
//     }

//     return null;
//   }
//   return (
//     <div style={{  }} className='w-full'>
//       <Calendar compact bordered renderCell={renderCell} />{' '}
//     </div>
//   );
// };



// export default BanglaCalendar


// import { Calendar, Badge } from 'rsuite';

// // Define Bengali months
// const banglaMonths = [
//   'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
//   'জুলাই', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
// ];

// function getTodoList(date) {
//   const day = date.getDate();

//   switch (day) {
//     case 10:
//       return [
//         { time: '10:30 am', title: 'মিটিং' },
//         { time: '12:00 pm', title: 'লাঞ্চ' }
//       ];
//     case 15:
//       return [
//         { time: '09:30 pm', title: 'পণ্য পরিচিতির মিটিং' },
//         { time: '12:30 pm', title: 'ক্লায়েন্টের আতিথ্য প্রদান' },
//         { time: '02:00 pm', title: 'পণ্য ডিজাইন আলোচনা' },
//         { time: '05:00 pm', title: 'পণ্য পরীক্ষা এবং গ্রহণ' },
//         { time: '06:30 pm', title: 'রিপোর্টিং' },
//         { time: '10:00 pm', title: 'ঘরে যাওয়ার জন্য ডগ সাথে বের হয়ে যাওয়া' }
//       ];
//     default:
//       return [];
//   }
// }

// const BanglaCalendar = () => {
//   function renderCell(date) {
//     const list = getTodoList(date);

//     if (list.length) {
//       return <Badge className="calendar-todo-item-badge" />;
//     }

//     return null;
//   }
  
//   return (
//     <div style={{ width: '100%' }}>
//       <Calendar 
//         compact 
//         bordered 
//         renderCell={renderCell} 
//         locale={{
//           sunday: 'রবিবার',
//           monday: 'সোমবার',
//           tuesday: 'মঙ্গলবার',
//           wednesday: 'বুধবার',
//           thursday: 'বৃহস্পতিবার',
//           friday: 'শুক্রবার',
//           saturday: 'শনিবার',
//           today: 'আজ',
//           january: banglaMonths[0],
//           february: banglaMonths[1],
//           march: banglaMonths[2],
//           april: banglaMonths[3],
//           may: banglaMonths[4],
//           june: banglaMonths[5],
//           july: banglaMonths[6],
//           august: banglaMonths[7],
//           september: banglaMonths[8],
//           october: banglaMonths[9],
//           november: banglaMonths[10],
//           december: banglaMonths[11]
//         }} 
//       />
//     </div>
//   );
// };

// export default BanglaCalendar;



// import { Calendar, Badge } from 'rsuite';

// // Define Bengali months
// const banglaMonths = [
//   'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
//   'জুলাই', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
// ];

// function getTodoList(date) {
//   const day = date.getDate();

//   switch (day) {
//     case 10:
//       return [
//         { time: '10:30 সকাল', title: 'মিটিং' },
//         { time: '12:00 দুপুর', title: 'লাঞ্চ' }
//       ];
//     case 15:
//       return [
//         { time: '09:30 রাত', title: 'পণ্য পরিচিতির মিটিং' },
//         { time: '12:30 দুপুর', title: 'ক্লায়েন্টের আতিথ্য প্রদান' },
//         { time: '02:00 দুপুর', title: 'পণ্য ডিজাইন আলোচনা' },
//         { time: '05:00 দুপুর', title: 'পণ্য পরীক্ষা এবং গ্রহণ' },
//         { time: '06:30 সন্ধ্যা', title: 'রিপোর্টিং' },
//         { time: '10:00 রাত', title: 'ঘরে যাওয়ার জন্য ডগ সাথে বের হয়ে যাওয়া' }
//       ];
//     default:
//       return [];
//   }
// }

// const BanglaCalendar = () => {
//   function renderCell(date) {
//     const list = getTodoList(date);

//     if (list.length) {
//       return <Badge className="calendar-todo-item-badge" />;
//     }

//     return null;
//   }
  
//   return (
//     <div style={{ width: '100%' }} className='text-3xl'>
//       <Calendar 
//         compact 
//         bordered 
//         renderCell={renderCell} 
//         locale={{
//           sunday: 'রবিবার',
//           monday: 'সোমবার',
//           tuesday: 'মঙ্গলবার',
//           wednesday: 'বুধবার',
//           thursday: 'বৃহস্পতিবার',
//           friday: 'শুক্রবার',
//           saturday: 'শনিবার',
//           today: 'আজ',
//           january: banglaMonths[0],
//           february: banglaMonths[1],
//           march: banglaMonths[2],
//           april: banglaMonths[3],
//           may: banglaMonths[4],
//           june: banglaMonths[5],
//           july: banglaMonths[6],
//           august: banglaMonths[7],
//           september: banglaMonths[8],
//           october: banglaMonths[9],
//           november: banglaMonths[10],
//           december: banglaMonths[11]
//         }} 
//       />
//     </div>
//   );
// };

// export default BanglaCalendar;


import { Calendar, Badge } from 'rsuite';

// Define Bengali months
const banglaMonths = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];

function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: '10:30 সকাল', title: 'মিটিং' },
        { time: '12:00 দুপুর', title: 'লাঞ্চ' }
      ];
    case 15:
      return [
        { time: '09:30 রাত', title: 'পণ্য পরিচিতির মিটিং' },
        { time: '12:30 দুপুর', title: 'ক্লায়েন্টের আতিথ্য প্রদান' },
        { time: '02:00 দুপুর', title: 'পণ্য ডিজাইন আলোচনা' },
        { time: '05:00 দুপুর', title: 'পণ্য পরীক্ষা এবং গ্রহণ' },
        { time: '06:30 সন্ধ্যা', title: 'রিপোর্টিং' },
        { time: '10:00 রাত', title: 'ঘরে যাওয়ার জন্য ডগ সাথে বের হয়ে যাওয়া' }
      ];
    default:
      return [];
  }
}

const BanglaCalendar = () => {
  function renderCell(date) {
    const list = getTodoList(date);

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />;
    }

    return null;
  }
  
  return (
    <div className="w-full p-4 dark:bg-black">
      <Calendar 
        compact 
        bordered 
        renderCell={renderCell} 
        locale={{
          sunday: 'রবিবার',
          monday: 'সোমবার',
          tuesday: 'মঙ্গলবার',
          wednesday: 'বুধবার',
          thursday: 'বৃহস্পতিবার',
          friday: 'শুক্রবার',
          saturday: 'শনিবার',
          today: 'আজ',
          january: banglaMonths[0],
          february: banglaMonths[1],
          march: banglaMonths[2],
          april: banglaMonths[3],
          may: banglaMonths[4],
          june: banglaMonths[5],
          july: banglaMonths[6],
          august: banglaMonths[7],
          september: banglaMonths[8],
          october: banglaMonths[9],
          november: banglaMonths[10],
          december: banglaMonths[11]
        }} 
      />
    </div>
  );
};

export default BanglaCalendar;
