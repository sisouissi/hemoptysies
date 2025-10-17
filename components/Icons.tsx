import React from 'react';

const iconStyle: React.CSSProperties = {
    overflow: 'visible'
};

export const HeartPulseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        viewBox="0 0 64 64" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg" 
        {...props} 
        style={{ ...props.style, ...iconStyle }}
    >
        <path d="M60,44h-3.47c-1.814,0-3.489-0.985-4.371-2.572l-2.495-4.492c3.771-0.445,6.861-3.192,7.704-6.984l0.353-1.587l1.29,0.516 c0.898,0.36,1.911,0.25,2.711-0.292C62.522,28.047,63,27.146,63,26.18c0-1.108-0.616-2.105-1.608-2.603l-1.656-0.828 c-0.385-0.193-0.604-0.609-0.542-1.036l0.484-3.393c0.12-0.835-0.129-1.68-0.682-2.317S57.643,15,56.799,15h-0.214 c-1.399,0-2.602,0.998-2.859,2.373l-1.688,9.004C51.535,29.056,49.192,31,46.466,31c-1.352,0-2.662-0.484-3.688-1.364l-3.25-2.786 L40,26.535V21h-2V1H26v20h-2v5.535l0.472,0.315l-3.25,2.786C20.195,30.516,18.885,31,17.534,31c-2.726,0-5.068-1.944-5.57-4.623 l-1.688-9.004C10.017,15.998,8.814,15,7.416,15H7.201c-0.844,0-1.645,0.366-2.198,1.003s-0.801,1.482-0.682,2.317l0.484,3.394 c0.061,0.427-0.157,0.843-0.543,1.036l-1.656,0.828C1.616,24.075,1,25.072,1,26.18c0,0.966,0.478,1.867,1.278,2.409 s1.813,0.651,2.712,0.292l1.289-0.516l0.353,1.587c0.843,3.792,3.933,6.54,7.704,6.984l-2.495,4.492C10.959,43.015,9.284,44,7.47,44 H4c-1.654,0-3,1.346-3,3s1.346,3,3,3h2.967c0.342,0,0.646,0.164,0.835,0.45s0.219,0.629,0.084,0.944l-0.61,1.424 c-0.398,0.93-0.304,1.989,0.253,2.833C8.085,56.496,9.021,57,10.033,57h0.581c1.244,0,2.373-0.782,2.81-1.947l1.46-3.893 c0.363-0.97,1.159-1.7,2.117-2.005V61c0,1.103,0.897,2,2,2h2c1.103,0,2-0.897,2-2V44.799c0-3.472,1.352-6.737,3.808-9.192L31.414,31 h1.172l4.606,4.606C39.648,38.062,41,41.327,41,44.799V59c0,1.103,0.897,2,2,2h2c1.103,0,2-0.897,2-2v-9.845 c0.958,0.305,1.753,1.036,2.117,2.005l1.46,3.893C51.014,56.218,52.143,57,53.386,57h0.581c1.012,0,1.948-0.504,2.504-1.349 c0.557-0.844,0.651-1.903,0.253-2.833l-0.611-1.425c-0.135-0.314-0.104-0.658,0.084-0.944S56.691,50,57.033,50H60 c1.654,0,3-1.346,3-3S61.654,44,60,44z M36,9h-8V7h8V9z M36,11v2h-8v-2H36z M36,15v2h-8v-2H36z M36,3v2h-8V3H36z M28,19h8v2h-8V19z M26,23h12v2.465L32.697,29h-1.395L26,25.465V23z M25.394,34.192C22.56,37.025,21,40.792,21,44.799V61h-2V47h-1 c-2.209,0-4.214,1.39-4.99,3.458l-1.459,3.893C11.405,54.739,11.028,55,10.614,55h-0.581c-0.342,0-0.646-0.164-0.835-0.45 s-0.219-0.629-0.084-0.944l0.61-1.424c0.398-0.93,0.304-1.989-0.253-2.833C8.915,48.504,7.979,48,6.967,48H4c-0.551,0-1-0.449-1-1 s0.449-1,1-1h3.47c2.541,0,4.885-1.379,6.119-3.6L17.7,35h-2.282c-3.306,0-6.116-2.254-6.833-5.481l-0.863-3.884l-3.474,1.389 c-0.285,0.115-0.594,0.081-0.848-0.091C3.146,26.761,3,26.487,3,26.18c0-0.347,0.193-0.659,0.502-0.813l1.655-0.828 c1.158-0.578,1.812-1.827,1.628-3.107l-0.484-3.394c-0.038-0.265,0.038-0.522,0.213-0.724S6.934,17,7.201,17h0.214 c0.437,0,0.813,0.312,0.894,0.742l1.688,9.003C10.677,30.37,13.846,33,17.534,33c1.829,0,3.601-0.655,4.99-1.846l3.677-3.152 l3.23,2.153L25.394,34.192z M60,48h-2.967c-1.012,0-1.948,0.504-2.504,1.349c-0.557,0.844-0.651-1.903-0.253,2.833l0.611,1.425 c0.135,0.314,0.104,0.658-0.084,0.944S54.309,55,53.967,55h-0.581c-0.415,0-0.791-0.261-0.937-0.649l-1.46-3.893 C50.214,48.39,48.209,47,46,47h-1v12h-2V44.799c0-4.006-1.56-7.773-4.394-10.606l-4.037-4.037l3.23-2.153l3.677,3.152 c1.389,1.19,3.161,1.846,4.99,1.846c3.688,0,6.857-2.63,7.536-6.255l1.688-9.003C55.771,17.312,56.147,17,56.584,17h0.214 c0.268,0,0.511,0.111,0.687,0.313s0.251,0.459,0.213,0.725l-0.484,3.393c-0.184,1.281,0.471,2.53,1.628,3.108l1.655,0.827 C60.807,25.521,61,25.833,61,26.18c0,0.307-0.146,0.581-0.399,0.752c-0.253,0.172-0.562,0.206-0.847,0.091l-3.475-1.389 l-0.863,3.884C54.699,32.746,51.889,35,48.583,35H46.3l4.111,7.4c1.233,2.221,3.578,3.6,6.119,3.6H60c0.551,0,1,0.449,1,1 S60.551,48,60,48z" />
    </svg>
);

// fix: Added missing BookOpenIcon
export const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

// fix: Added missing InfoIcon
export const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
);

// fix: Added missing ActivityIcon
export const ActivityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

// fix: Added missing ShieldAlertIcon
export const ShieldAlertIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
);

// fix: Added missing CheckCircleIcon
export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

// fix: Added missing StarIcon
export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

// fix: Added missing QuoteIcon
export const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v6c0 7 4 8 8 8Z"/>
        <path d="M14 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 4 8 8 8Z"/>
    </svg>
);

// fix: Added missing ChevronRightIcon
export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

// fix: Added missing FileTextIcon
export const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
);

// fix: Added missing SirenIcon
export const SirenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <path d="M12 2L9 9h6l-3-7z" />
        <path d="M5 9h14" />
        <path d="M18 9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
        <path d="M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
);

// fix: Added missing AlertTriangleIcon
export const AlertTriangleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

// fix: Added missing UsersIcon
export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

// fix: Added missing PillIcon
export const PillIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
        <path d="m8.5 8.5 7 7"/>
    </svg>
);

// fix: Added missing HomeIcon
export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} style={{ ...props.style, ...iconStyle }}>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);