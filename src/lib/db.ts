export const dashboardData = {
	metrics: [
		{
			title: 'Total Revenue',
			value: '£100',
			change: '↗ 5% in the last 1 month',
			changeType: 'positive',
			icon: 'chart',
		},
		{
			title: 'Appointments',
			value: '351',
			change: '↗ 5% in the last 1 month',
			changeType: 'positive',
			icon: 'calendar',
		},
		{
			title: 'No-Shows',
			value: '15',
			change: '↘ 3% in the last 1 month',
			changeType: 'negative',
			icon: 'userX',
		},
		{
			title: 'Call Conversion Rate',
			value: '90%',
			change: '↗ 5% in the last 1 month',
			changeType: 'positive',
			icon: 'phone',
		},
	],

	overallRatingData: [
		{ month: 'Jan', value: 40 },
		{ month: 'Feb', value: 55 },
		{ month: 'Mar', value: 45 },
		{ month: 'Apr', value: 60 },
		{ month: 'May', value: 55 },
		{ month: 'Jun', value: 75 },
		{ month: 'Jul', value: 50 },
		{ month: 'Aug', value: 40 },
		{ month: 'Sep', value: 60 },
		{ month: 'Oct', value: 55 },
		{ month: 'Nov', value: 45 },
		{ month: 'Dec', value: 35 },
	],

	topPerformers: [
		{
			rank: '01',
			name: 'David Hales',
			calls: 150,
			conversion: '72%',
			medal: 'gold',
		},
		{
			rank: '02',
			name: 'David Hales',
			calls: 160,
			conversion: '60%',
			medal: 'silver',
		},
		{
			rank: '03',
			name: 'David Hales',
			calls: 120,
			conversion: '42%',
			medal: 'bronze',
		},
		{
			rank: '04',
			name: 'David Hales',
			calls: 100,
			conversion: '22%',
			medal: null,
		},
	],

	socialMediaData: [
		{ name: 'Total Followers', value: 60, color: '#ffa048', count: '2.1k' },
		{ name: 'Total Likes', value: 30, color: '#ffcd96', count: '1.4k' },
		{ name: 'Views Growth', value: 10, color: '#f0f0f0', count: '800' },
	],

	todaysTasks: [
		{
			id: 1,
			title: 'Call Emily',
			time: '2:30 PM',
			description: 'Discuss appointment options',
			type: 'Call',
		},
		{
			id: 2,
			title: 'Call Emily',
			time: '2:30 PM',
			description: 'Discuss appointment options',
			type: 'Call',
		},
		{
			id: 3,
			title: 'Call Emily',
			time: '2:30 PM',
			description: 'Discuss appointment options',
			type: 'Call',
		},
	],

	upcomingTasks: [
		{
			id: 4,
			title: 'Follow Up with John',
			time: '10:00 AM',
			description: 'Review treatment options',
			type: 'Call',
		},
		{
			id: 5,
			title: 'Follow Up with John',
			time: '10:00 AM',
			description: 'Review treatment options',
			type: 'Call',
		},
		{
			id: 6,
			title: 'Follow Up with John',
			time: '10:00 AM',
			description: 'Review treatment options',
			type: 'Call',
		},
	],

	overdueTasks: [
		{
			id: 7,
			title: "You haven't contacted Patient John Smith in 3 days",
			time: '3 days ago',
			description: '',
			type: 'Overdue',
		},
		{
			id: 8,
			title: 'Missed call from a new lead',
			time: 'Today at 11:34 AM',
			description: '',
			type: 'Missed',
		},
		{
			id: 9,
			title: '3 tasks are overdue',
			time: 'Overdue Since Yesterday',
			description: '',
			type: 'Overdue',
		},
	],

	campaignData: [
		{
			name: 'New Patient Special - Image Ad',
			impressions: '23,458',
			conversions: '50',
			clicks: '1,420',
			ctr: '5.3%',
			status: 'Active',
			roas: '4.2x',
		},
		{
			name: 'Teeth Whitening - Video Ad',
			impressions: '18,972',
			conversions: '84',
			clicks: '987',
			ctr: '5.2%',
			status: 'Active',
			roas: '3.8x',
		},
		{
			name: 'Free Consultation - Carousel',
			impressions: '15,643',
			conversions: '78',
			clicks: '554',
			ctr: '5.3%',
			status: 'Active',
			roas: '3.6x',
		},
	],

	navigationItems: [
		{
			title: 'Dashboard',
			icon: 'TbSmartHome',
			active: true,
			path: '/dashboard',
		},
		{
			title: 'Call Tracking',
			icon: 'Phone',
			active: false,
			path: '/call-tracking',
		},
		{
			title: 'Client Management',
			icon: 'Users',
			active: false,
			path: '/client-managment',
			hasSubmenu: true,
			submenuItems: [
				{ title: 'Leads', path: '/client-managment/leads' },
				{ title: 'Patients', path: '/client-managment/patients' },
				{ title: 'Appointments', path: '/client-managment/appointments' },
			],
		},
		{
			title: 'Finances',
			icon: 'DollarSign',
			active: false,
			path: '/financial-data',
		},
		{
			title: "Pam's Insights",
			icon: 'TrendingUp',
			active: false,
			path: '/insights',
		},
		{
			title: 'Social Media Analytics',
			icon: 'BarChart3',
			active: false,
			path: '/social-media-analytics',
			hasSubmenu: true,
			submenuItems: [
				{ title: 'Overview', path: '/social-media-analytics/overview' },
				{
					title: 'Ad Performance',
					path: '/social-media-analytics/ad-performance',
				},
				{ title: 'Social Growth', path: '#' }, //social-media-analytics/social-growth
				{ title: 'Recommendations', path: '#' }, //social-media-analytics/recommendations
			],
		},
		{
			title: 'Coaching',
			icon: 'TvMinimalPlay',
			active: false,
			path: '/coaching',
			hasSubmenu: true,
			submenuItems: [
				{ title: 'Overview', path: '/coaching/overview' },
				{ title: "Pam's Insights", path: '/coaching/insights' },
				{ title: 'Objection Tracker', path: '/coaching/objection-tracker' },
				{ title: 'Scripts', path: '/coaching/scripts' },
			],
		},
		{ title: 'Settings', icon: 'Settings', active: false, path: '/settings' },
	],
};

export const callTrackingData = {
	metrics: [
		{
			title: 'Call Conversion',
			value: '68%',
			icon: '💶',
			color: '#10b981',
		},
		{
			title: 'Total Calls',
			value: '157',
			icon: '📞',
			color: '#6b7280',
		},
		{
			title: 'Avg. Call Duration',
			value: '2:14',
			icon: '🕣',
			color: '#6b7280',
		},
		{
			title: 'Booking Rate',
			value: '72%',
			icon: '📅',
			color: '#ef4444',
		},
	],

	calls: [
		{
			id: 1,
			callerName: 'Unknown',
			number: '+44 7123 456789',
			dateTime: 'Apr 21, 2025 4:59PM',
			duration: '7:25',
			bookingStatus: 'Not Booked',
			followUpStatus: 'Pending',
			staffMember: 'Jamie Smith',
			direction: 'outbound',
		},
		{
			id: 2,
			callerName: 'Unknown',
			number: '+44 7123 456789',
			dateTime: 'Apr 21, 2025 4:59PM',
			duration: '7:25',
			bookingStatus: 'Not Booked',
			followUpStatus: 'Pending',
			staffMember: 'Jamie Smith',
			direction: 'outbound',
		},
		{
			id: 3,
			callerName: 'Unknown',
			number: '+44 7123 456789',
			dateTime: 'Apr 21, 2025 4:59PM',
			duration: '7:25',
			bookingStatus: 'Not Booked',
			followUpStatus: 'Pending',
			staffMember: 'Jamie Smith',
			direction: 'outbound',
		},
		{
			id: 4,
			callerName: 'Unknown',
			number: '+44 7123 456789',
			dateTime: 'Apr 21, 2025 4:59PM',
			duration: '7:25',
			bookingStatus: 'Not Booked',
			followUpStatus: 'Pending',
			staffMember: 'Jamie Smith',
			direction: 'outbound',
		},
		{
			id: 5,
			callerName: 'Unknown',
			number: '+44 7123 456789',
			dateTime: 'Apr 21, 2025 4:59PM',
			duration: '7:25',
			bookingStatus: 'Not Booked',
			followUpStatus: 'Pending',
			staffMember: 'Jamie Smith',
			direction: 'outbound',
		},
		{
			id: 6,
			callerName: 'Unknown',
			number: '+44 7123 456789',
			dateTime: 'Apr 21, 2025 4:59PM',
			duration: '7:25',
			bookingStatus: 'Not Booked',
			followUpStatus: 'Pending',
			staffMember: 'Jamie Smith',
			direction: 'outbound',
		},
		{
			id: 7,
			callerName: 'Unknown',
			number: '+44 7123 456789',
			dateTime: 'Apr 21, 2025 4:59PM',
			duration: '7:25',
			bookingStatus: 'Not Booked',
			followUpStatus: 'Pending',
			staffMember: 'Jamie Smith',
			direction: 'outbound',
		},
		{
			id: 8,
			callerName: 'Unknown',
			number: '+44 7123 456789',
			dateTime: 'Apr 21, 2025 4:59PM',
			duration: '7:25',
			bookingStatus: 'Not Booked',
			followUpStatus: 'Pending',
			staffMember: 'Jamie Smith',
			direction: 'outbound',
		},
	],

	callDetails: {
		1: {
			id: 1,
			phoneNumber: '+44 7123 456789',
			duration: '7:25',
			agent: 'Jamie Smith',
			date: 'Apr 29, 2025, 10:15:00 AM',
			direction: 'outbound',
			bookingStatus: 'Not Booked',
			followUpStatus: 'Pending',
			comments: [],
			followUpNotes: 'Call back next Tuesday',
			callsHistory: [
				{
					callerName: 'Unknown',
					number: '+44 7123 456789',
					dateTime: 'Apr 21, 2025 4:59PM',
					duration: '7:25',
					bookingStatus: 'Not Booked',
					followUpStatus: 'Pending',
					staffMember: 'Jamie Smith',
				},
				{
					callerName: 'Unknown',
					number: '+44 7123 456789',
					dateTime: 'Apr 21, 2025 4:59PM',
					duration: '7:25',
					bookingStatus: 'Not Booked',
					followUpStatus: 'Pending',
					staffMember: 'Jamie Smith',
				},
				{
					callerName: 'Unknown',
					number: '+44 7123 456789',
					dateTime: 'Apr 21, 2025 4:59PM',
					duration: '7:25',
					bookingStatus: 'Not Booked',
					followUpStatus: 'Pending',
					staffMember: 'Jamie Smith',
				},
			],
		},
		2: {
			id: 2,
			phoneNumber: '+15789789651',
			duration: '7:25',
			agent: 'Jamie Smith',
			date: 'Apr 29, 2025, 10:15:00 AM',
			direction: 'outbound',
			bookingStatus: 'Booked',
			followUpStatus: 'Done',
			comments: [
				{
					author: 'Mike Chen',
					content: 'Send pricing information',
					timestamp: 'Apr 29, 2025, 10:15:00 AM',
				},
			],
			followUpNotes: '',
			callsHistory: [
				{
					callerName: 'Unknown',
					number: '+44 7123 456789',
					dateTime: 'Apr 21, 2025 4:59PM',
					duration: '7:25',
					bookingStatus: 'Not Booked',
					followUpStatus: 'Pending',
					staffMember: 'Jamie Smith',
				},
				{
					callerName: 'Unknown',
					number: '+44 7123 456789',
					dateTime: 'Apr 21, 2025 4:59PM',
					duration: '7:25',
					bookingStatus: 'Not Booked',
					followUpStatus: 'Pending',
					staffMember: 'Jamie Smith',
				},
			],
		},
	},

	filterOptions: {
		dateRanges: [
			{ value: 'apr21-may5', label: 'Apr 21 - May 5' },
			{ value: 'last7days', label: 'Last 7 days' },
			{ value: 'last30days', label: 'Last 30 days' },
			{ value: 'custom', label: 'Custom range' },
		],
		bookingStatuses: [
			{ value: 'all', label: 'All' },
			{ value: 'booked', label: 'Booked' },
			{ value: 'not-booked', label: 'Not Booked' },
		],
		followUpStatuses: [
			{ value: 'all', label: 'All' },
			{ value: 'pending', label: 'Pending' },
			{ value: 'done', label: 'Done' },
			{ value: 'not-required', label: 'Not Required' },
		],
		staffMembers: [
			{ value: 'all', label: 'All Staff' },
			{ value: 'jamie-smith', label: 'Jamie Smith' },
			{ value: 'mike-chen', label: 'Mike Chen' },
			{ value: 'sarah-johnson', label: 'Sarah Johnson' },
		],
	},
};

export const clientManagementData = {
	leads: [
		{
			id: 1,
			name: 'Alex Thompson',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Website',
			status: 'New',
			createdDate: 'Dec 10, 2023',
			notes: 'Interested in teeth whitening services',
		},
		{
			id: 2,
			name: 'Jordan Rivera',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Referral',
			status: 'Contacted',
			createdDate: 'Dec 08, 2023',
			notes: 'Follow up scheduled for next week',
		},
		{
			id: 3,
			name: 'Taylor Morgan',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Google Ads',
			status: 'New',
			createdDate: 'Dec 05, 2023',
			notes: 'No notes',
		},
		{
			id: 4,
			name: 'Casey Wilson',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Social Media',
			status: 'Converted',
			createdDate: 'Dec 01, 2023',
			notes: 'Schedule first appointment',
		},
		{
			id: 5,
			name: 'Jamie Smith',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Website',
			status: 'Lost',
			createdDate: 'Nov 28, 2023',
			notes: 'Choose another provider',
		},
		{
			id: 6,
			name: 'Alex Thompson',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Website',
			status: 'New',
			createdDate: 'Dec 10, 2023',
			notes: 'Interested in teeth whitening services',
		},
		{
			id: 7,
			name: 'Taylor Morgan',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Google Ads',
			status: 'New',
			createdDate: 'Dec 05, 2023',
			notes: 'No notes',
		},
		{
			id: 8,
			name: 'Jordan Rivera',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Referral',
			status: 'Contacted',
			createdDate: 'Dec 08, 2023',
			notes: 'Follow up scheduled for next week',
		},
		{
			id: 9,
			name: 'Casey Wilson',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Social Media',
			status: 'Converted',
			createdDate: 'Dec 01, 2023',
			notes: 'Schedule first appointment',
		},
		{
			id: 10,
			name: 'Alex Thompson',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Website',
			status: 'New',
			createdDate: 'Dec 10, 2023',
			notes: 'Interested in teeth whitening services',
		},
		{
			id: 11,
			name: 'Jordan Rivera',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Referral',
			status: 'Contacted',
			createdDate: 'Dec 08, 2023',
			notes: 'Follow up scheduled for next week',
		},
		{
			id: 12,
			name: 'Taylor Morgan',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Google Ads',
			status: 'New',
			createdDate: 'Dec 05, 2023',
			notes: 'No notes',
		},
		{
			id: 13,
			name: 'Casey Wilson',
			contact: '+44 7123 456789',
			email: 'alexjon@gmail.com',
			source: 'Social Media',
			status: 'Converted',
			createdDate: 'Dec 01, 2023',
			notes: 'Schedule first appointment',
		},
	],

	filterOptions: {
		timeFrames: [
			{ value: 'all', label: 'All' },
			{ value: 'this-week', label: 'This Week' },
			{ value: 'this-month', label: 'This Month' },
			{ value: 'last-month', label: 'Last Month' },
		],
		statuses: [
			{ value: 'all', label: 'All' },
			{ value: 'new', label: 'New' },
			{ value: 'contacted', label: 'Contacted' },
			{ value: 'converted', label: 'Converted' },
			{ value: 'lost', label: 'Lost' },
		],
		sources: [
			{ value: 'all', label: 'All' },
			{ value: 'website', label: 'Website' },
			{ value: 'referral', label: 'Referral' },
			{ value: 'google-ads', label: 'Google Ads' },
			{ value: 'social-media', label: 'Social Media' },
			{ value: 'others', label: 'Others' },
		],
	},
};

export const patientManagementData = {
	patients: [
		{
			id: 1,
			name: 'Robert Fox',
			phone: '+44 7123 456789',
			email: 'sara.cruz@example.com',
			lastVisit: 'Oct 10, 2024',
			status: 'Active',
			dentallyId: 'DEN12345',
		},
		{
			id: 2,
			name: 'Annette Black',
			phone: '+44 7123 456789',
			email: 'willie.jennings@example.com',
			lastVisit: 'Oct 10, 2024',
			status: 'Active',
			dentallyId: 'DEN12346',
		},
		{
			id: 3,
			name: 'Devon Lane',
			phone: '+44 7123 456789',
			email: 'michael.mitc@example.com',
			lastVisit: 'Oct 10, 2024',
			status: 'In Active',
			dentallyId: 'DEN12347',
		},
		{
			id: 4,
			name: 'Jane Cooper',
			phone: '+44 7123 456789',
			email: 'kenzi.lawson@example.com',
			lastVisit: 'Oct 10, 2024',
			status: 'Active',
			dentallyId: 'DEN12348',
		},
		{
			id: 5,
			name: 'Kristin Watson',
			phone: '+44 7123 456789',
			email: 'tanya.hill@example.com',
			lastVisit: 'Oct 10, 2024',
			status: 'In Active',
			dentallyId: 'DEN12349',
		},
		{
			id: 6,
			name: 'Bessie Cooper',
			phone: '+44 7123 456789',
			email: 'felicia.reid@example.com',
			lastVisit: 'Oct 10, 2024',
			status: 'Active',
			dentallyId: 'DEN12350',
		},
		{
			id: 7,
			name: 'Guy Hawkins',
			phone: '+44 7123 456789',
			email: 'bill.sanders@example.com',
			lastVisit: 'Oct 10, 2024',
			status: 'In Active',
			dentallyId: 'DEN12351',
		},
		{
			id: 8,
			name: 'Dianne Russell',
			phone: '+44 7123 456789',
			email: 'alma.lawson@example.com',
			lastVisit: 'Oct 10, 2024',
			status: 'Active',
			dentallyId: 'DEN12352',
		},
		{
			id: 9,
			name: 'Floyd Miles',
			phone: '+44 7123 456789',
			email: 'felicia.reid@example.com',
			lastVisit: 'Oct 10, 2024',
			status: 'Active',
			dentallyId: 'DEN12353',
		},
		{
			id: 10,
			name: 'John Doe',
			phone: '+44 7123 456789',
			email: 'kenzi.lawson@example.com',
			lastVisit: 'Oct 10, 2024',
			status: 'In Active',
			dentallyId: 'DEN12354',
		},
	],

	patientDetails: {
		1: {
			id: 1,
			name: 'Sarah Johnson',
			dentallyId: 'DEN12345',
			phone: '+44 7123 456789',
			email: 'sarah.j@example.com',
			lastSync: 'May 4, 2025',
			enrolledInGoldCard: 'Yes',
			medicalHistory: [
				{
					id: 1,
					type: 'note',
					content: 'Patient has sensitivity to cold temperatures',
					date: 'Oct 10, 2023',
					provider: 'Dr. Smith',
				},
				{
					id: 2,
					type: 'prescription',
					content: 'Fluoride treatment recommended',
					date: 'Oct 5, 2023',
					provider: 'Dr. Smith',
				},
			],
			appointments: [
				{
					id: 1,
					date: 'Oct 10, 2023',
					provider: 'Dr. Robert Smith',
					type: 'Checkup',
					status: 'Scheduled',
				},
				{
					id: 2,
					date: 'Oct 10, 2023',
					provider: 'Dr. Robert Smith',
					type: 'Checkup',
					status: 'Cancelled',
				},
				{
					id: 3,
					date: 'Oct 10, 2023',
					provider: 'Dr. Robert Smith',
					type: 'Checkup',
					status: 'Completed',
				},
			],
			billingHistory: [
				{
					id: 1,
					date: 'Oct 10, 2023',
					description: 'Regular Checkup',
					amount: '£150.00',
					status: 'Paid',
				},
				{
					id: 2,
					date: 'Jul 15, 2023',
					description: 'Teeth Cleaning',
					amount: '£125.00',
					status: 'Paid',
				},
			],
			callsHistory: [
				{
					id: 1,
					direction: 'Outbound',
					dateTime: 'Apr 21, 2025 4:59PM',
					duration: '7:25',
					booking: 'Not Booked',
					followUp: 'Pending',
				},
				{
					id: 2,
					direction: 'Inbound',
					dateTime: 'Apr 21, 2025 4:59PM',
					duration: '7:25',
					booking: 'Not Booked',
					followUp: 'Pending',
				},
				{
					id: 3,
					direction: 'Outbound',
					dateTime: 'Apr 21, 2025 4:59PM',
					duration: '7:25',
					booking: 'Not Booked',
					followUp: 'Pending',
				},
			],
			goldCardReferrals: [
				{
					id: 1,
					refer: 'John Smith',
					date: 'Apr 10, 2025',
					commission: '£32.50',
				},
				{
					id: 2,
					refer: 'Emma Wilson',
					date: 'May 5, 2025',
					commission: '£32.50',
				},
			],
		},
	},

	filterOptions: {
		statuses: [
			{ value: 'all', label: 'All' },
			{ value: 'active', label: 'Active' },
			{ value: 'inactive', label: 'In Active' },
		],
		dateRanges: [
			{ value: 'all', label: 'All' },
			{ value: 'this-week', label: 'This Week' },
			{ value: 'this-month', label: 'This Month' },
			{ value: 'last-month', label: 'Last Month' },
		],
	},
};

export const financialData = {
	data: [
		{
			id: 1,
			date: 'Dec 15, 2023',
			patient: 'Dianne Russell',
			description: 'Regular checkup',
			amount: '£446.61',
			method: 'Insurance',
			status: 'Paid',
		},
		{
			id: 2,
			date: 'Dec 15, 2023',
			patient: 'Ronald Richards',
			description: 'Teeth Cleaning',
			amount: '£275.43',
			method: 'Card',
			status: 'Paid',
		},
		{
			id: 3,
			date: 'Dec 15, 2023',
			patient: 'Esther Howard',
			description: 'Consultation',
			amount: '£948.55',
			method: 'Cash',
			status: 'Pending',
		},
		{
			id: 4,
			date: 'Dec 15, 2023',
			patient: 'Floyd Miles',
			description: 'Root Canal',
			amount: '£200.00',
			method: 'Bank Transfer',
			status: 'Overdue',
		},
		{
			id: 5,
			date: 'Dec 15, 2023',
			patient: 'Eleanor Pena',
			description: 'Filling',
			amount: '£475.22',
			method: 'Card',
			status: 'Paid',
		},
		{
			id: 6,
			date: 'Dec 15, 2023',
			patient: 'Bessie Cooper',
			description: 'Consultation',
			amount: '£105.55',
			method: 'Cash',
			status: 'Paid',
		},
		{
			id: 7,
			date: 'Dec 15, 2023',
			patient: 'Wade Warren',
			description: 'Teeth Cleaning',
			amount: '£778.35',
			method: 'Card',
			status: 'Pending',
		},
		{
			id: 8,
			date: 'Dec 15, 2023',
			patient: 'Brooklyn Simmons',
			description: 'Filling',
			amount: '£854.08',
			method: 'Cash',
			status: 'Paid',
		},
		{
			id: 9,
			date: 'Dec 15, 2023',
			patient: 'Devon Lane',
			description: 'Teeth Cleaning',
			amount: '£943.65',
			method: 'Card',
			status: 'Pending',
		},
		{
			id: 10,
			date: 'Dec 15, 2023',
			patient: 'Leslie Alexander',
			description: 'Filling',
			amount: '£202.87',
			method: 'Bank Transfer',
			status: 'Paid',
		},
		{
			id: 11,
			date: 'Dec 15, 2023',
			patient: 'Leslie Alexander',
			description: 'Filling',
			amount: '£202.87',
			method: 'Bank Transfer',
			status: 'Paid',
		},
	],
	filterOptions: {
		timeFrames: [
			{ value: 'all', label: 'All' },
			{ value: 'this-week', label: 'This Week' },
			{ value: 'this-month', label: 'This Month' },
			{ value: 'last-month', label: 'Last Month' },
		],
		statuses: [
			{ value: 'all', label: 'All' },
			{ value: 'paid', label: 'Paid' },
			{ value: 'pending', label: 'Pending' },
			{ value: 'overdue', label: 'Overdue' },
		],
		method: [
			{ value: 'all', label: 'All' },
			{ value: 'insurance', label: 'Insurance' },
			{ value: 'cash', label: 'Cash' },
			{ value: 'card', label: 'Card' },
			{ value: 'bank-transfer', label: 'Bank Transfer' },
		],
	},
	metrics: [
		{
			title: 'Total Revenue',
			value: '£350.00',
		},
		{
			title: 'Pending Payments',
			value: '£850.00',
		},
		{
			title: 'Overdue Payments',
			value: '£200.00',
		},
	],
};
export const mockAppointments = [
	{
		id: '1',
		patient: 'Robert Fox',
		date: 'Jun 15, 1990',
		time: '9:40 am',
		provider: 'Dr. Robert Smith',
		type: 'New Patient Examination',
		status: 'Completed',
	},
	{
		id: '2',
		patient: 'Robert Fox',
		date: 'Jun 15, 1990',
		time: '9:40 am',
		provider: 'Dr. Maddy',
		type: 'Routine Examination',
		status: 'Completed',
	},
	{
		id: '3',
		patient: 'Robert Fox',
		date: 'Jun 15, 1990',
		time: '9:40 am',
		provider: 'Dr. Robin Jefferson',
		type: 'Child Examination',
		status: 'Scheduled',
	},
	{
		id: '4',
		patient: 'Robert Fox',
		date: 'Jun 15, 1990',
		time: '9:40 am',
		provider: 'Dr. Maddy',
		type: 'Fillings',
		status: 'Completed',
	},
	{
		id: '5',
		patient: 'Robert Fox',
		date: 'Jun 15, 1990',
		time: '9:40 am',
		provider: 'Dr. Robert Smith',
		type: 'Extraction',
		status: 'Cancelled',
	},
	{
		id: '6',
		patient: 'Robert Fox',
		date: 'Jun 15, 1990',
		time: '9:40 am',
		provider: 'Dr. Maddy',
		type: 'Traditional Braces',
		status: 'Completed',
	},
	{
		id: '7',
		patient: 'Robert Fox',
		date: 'Jun 15, 1990',
		time: '9:40 am',
		provider: 'Dr. Robert Smith',
		type: 'Clear Aligners',
		status: 'Completed',
	},
	{
		id: '8',
		patient: 'Robert Fox',
		date: 'Jun 15, 1990',
		time: '9:40 am',
		provider: 'Dr. Robin Jefferson',
		type: 'Composite Bonding',
		status: 'Cancelled',
	},
	{
		id: '9',
		patient: 'Robert Fox',
		date: 'Jun 15, 1990',
		time: '9:40 am',
		provider: 'Dr. Robert Smith',
		type: 'Crown',
		status: 'Completed',
	},
	{
		id: '10',
		patient: 'Robert Fox',
		date: 'Jun 15, 1990',
		time: '9:40 am',
		provider: 'Dr. Robin Jefferson',
		type: 'Bridge',
		status: 'Scheduled',
	},
];
export const appointmentTypes = {
	'General Dentistry': [
		'New Patient Examination',
		'Routine Examination',
		'Child Examination',
		'Fillings',
		'Extraction',
		'Scale and Polish',
		'Periodontal Treatment',
		'Root Canal Treatment',
	],
	'Cosmetic Dentistry': [
		'Traditional Braces',
		'Clear Aligners',
		'Composite Bonding',
		'Porcelain Veneers',
		'Teeth Whitening',
	],
	'Restorative Dentistry': ['Crown', 'Bridge', 'Dentures', 'Dental Implants'],
};

export const appointmentCategories = [
	'General Dentistry',
	'Cosmetic Dentistry',
	'Restorative Dentistry',
];

export const providers = [
	'Dr. Robert Smith',
	'Dr. Maddy',
	'Dr. Robin Jefferson',
];

export const timeSlots = [
	'9:00 am',
	'9:30 am',
	'10:00 am',
	'10:30 am',
	'11:00 am',
	'11:30 am',
	'12:00 pm',
	'12:30 pm',
	'1:00 pm',
	'1:30 pm',
	'2:00 pm',
	'2:30 pm',
	'3:00 pm',
	'3:30 pm',
	'4:00 pm',
	'4:30 pm',
	'5:00 pm',
];

export const InsightsData = {
	filterOptions: {
		timeFrames: [
			{ value: 'all', label: 'All' },
			{ value: 'last-30-days', label: 'Last 30 Days' },
			{ value: 'last-3-days', label: 'Last 3 Days' },
			{ value: 'last-6-months', label: 'Last 6 Months' },
			{ value: 'last-year', label: 'Last Year' },
			{ value: 'custom-date', label: 'Custom Date' },
		],
		statuses: [
			{ value: 'all', label: 'All' },
			{ value: 'paid', label: 'Paid' },
			{ value: 'pending', label: 'Pending' },
			{ value: 'overdue', label: 'Overdue' },
		],
		method: [
			{ value: 'all', label: 'All' },
			{ value: 'insurance', label: 'Insurance' },
			{ value: 'cash', label: 'Cash' },
			{ value: 'card', label: 'Card' },
			{ value: 'bank-transfer', label: 'Bank Transfer' },
		],
	},
	metrics: [
		{
			title: 'Total Patients',
			value: 1254,
			change: '+15%',
		},
		{
			title: 'Total Revenue',
			value: '£52,450',
			change: '+15%',
		},
		{
			title: 'Conversion Rate',
			value: '68%',
			change: '+15%',
		},
		{
			title: 'Appointment Fill Rate',
			value: '92%',
			change: '+15%',
		},
		{
			title: 'No Show Rate',
			value: '8.5%',
			change: '-18%',
		},
		{
			title: 'Average Treatment Value',
			value: '£420',
			change: '+15%',
		},
	],
};
export const performanceData = [
	{ date: 'Apr 1', conversions: 280, clicks: 120 },
	{ date: 'Apr 4', conversions: 320, clicks: 110 },
	{ date: 'Apr 7', conversions: 380, clicks: 125 },
	{ date: 'Apr 10', conversions: 420, clicks: 140 },
	{ date: 'Apr 13', conversions: 350, clicks: 115 },
	{ date: 'Apr 15', conversions: 410, clicks: 130 },
	{ date: 'Apr 16', conversions: 480, clicks: 145 },
	{ date: 'Apr 19', conversions: 520, clicks: 160 },
	{ date: 'Apr 22', conversions: 450, clicks: 135 },
	{ date: 'Apr 25', conversions: 390, clicks: 120 },
];

export const impressionsData = [
	{ date: 'Apr 1', impressions: 2800 },
	{ date: 'Apr 4', impressions: 3200 },
	{ date: 'Apr 7', impressions: 2900 },
	{ date: 'Apr 10', impressions: 4200 },
	{ date: 'Apr 13', impressions: 3800 },
	{ date: 'Apr 15', impressions: 5200 },
	{ date: 'Apr 16', impressions: 4100 },
	{ date: 'Apr 19', impressions: 4800 },
	{ date: 'Apr 22', impressions: 3600 },
	{ date: 'Apr 25', impressions: 3200 },
];

export const campaignDetails = [
	{
		name: 'New Patient Special - Image Ad',
		impressions: '23,458',
		conversions: 50,
		clicks: 1420,
		ctr: '5.3%',
		status: 'Active',
		roas: '4.2x',
	},
	{
		name: 'Teeth Whitening - Video Ad',
		impressions: '18,972',
		conversions: 94,
		clicks: 987,
		ctr: '5.2%',
		status: 'Active',
		roas: '3.8x',
	},
	{
		name: 'Free Consultation - Carousel',
		impressions: '15,643',
		conversions: 78,
		clicks: 554,
		ctr: '5.3%',
		status: 'Active',
		roas: '3.6x',
	},
	{
		name: 'Family Check-up - Image Ad',
		impressions: '12,589',
		conversions: 65,
		clicks: 235,
		ctr: '5.6%',
		status: 'Active',
		roas: '3.9x',
	},
	{
		name: 'Emergency Care - Image Ad',
		impressions: '9,876',
		conversions: 42,
		clicks: 624,
		ctr: '5.2%',
		status: 'Active',
		roas: '3.5x',
	},
];
export const followersData = [
	{ date: 'Apr 1', instagram: 5500, facebook: 2800 },
	{ date: 'Apr 4', instagram: 8800, facebook: 2900 },
	{ date: 'Apr 7', instagram: 4200, facebook: 3100 },
	{ date: 'Apr 10', instagram: 9600, facebook: 3200 },
	{ date: 'Apr 13', instagram: 5100, facebook: 3400 },
	{ date: 'Apr 16', instagram: 8217, facebook: 3300 },
	{ date: 'Apr 19', instagram: 3800, facebook: 3500 },
	{ date: 'Apr 22', instagram: 9200, facebook: 3600 },
	{ date: 'Apr 25', instagram: 3500, facebook: 3700 },
];

export const engagementData = [
	{ day: 'Mon', likes: 450, comments: 280, shares: 120 },
	{ day: 'Tue', likes: 320, comments: 310, shares: 150 },
	{ day: 'Wed', likes: 480, comments: 290, shares: 140 },
	{ day: 'Thu', likes: 520, comments: 180, shares: 160 },
	{ day: 'Fri', likes: 420, comments: 250, shares: 130 },
	{ day: 'Sat', likes: 380, comments: 220, shares: 110 },
	{ day: 'Sun', likes: 580, comments: 340, shares: 180 },
];

export const conversionsData = [
	{ date: 'Apr 1', conversions: 320, clicks: 120 },
	{ date: 'Apr 4', conversions: 280, clicks: 100 },
	{ date: 'Apr 7', conversions: 350, clicks: 110 },
	{ date: 'Apr 10', conversions: 420, clicks: 130 },
	{ date: 'Apr 13', conversions: 380, clicks: 115 },
	{ date: 'Apr 15', conversions: 410, clicks: 125 },
	{ date: 'Apr 16', conversions: 450, clicks: 140 },
	{ date: 'Apr 19', conversions: 520, clicks: 150 },
	{ date: 'Apr 22', conversions: 480, clicks: 135 },
	{ date: 'Apr 25', conversions: 390, clicks: 120 },
];

export const spendData = [
	{ date: 'Apr 1', spend: 150 },
	{ date: 'Apr 4', spend: 200 },
	{ date: 'Apr 7', spend: 180 },
	{ date: 'Apr 10', spend: 220 },
	{ date: 'Apr 13', spend: 300 },
	{ date: 'Apr 15', spend: 450 },
	{ date: 'Apr 16', spend: 280 },
	{ date: 'Apr 19', spend: 320 },
	{ date: 'Apr 22', spend: 290 },
	{ date: 'Apr 25', spend: 250 },
];

export const campaignData = [
	{
		name: 'New Patient Promo',
		spend: '£400',
		conversions: 50,
		clicks: 1420,
		status: 'Active',
		roas: '4.2x',
	},
	{
		name: 'Teeth Whitening',
		spend: '£400',
		conversions: 94,
		clicks: 987,
		status: 'Active',
		roas: '3.8x',
	},
	{
		name: 'Invisalign Offer',
		spend: '£450',
		conversions: 78,
		clicks: 554,
		status: 'Active',
		roas: '3.1x',
	},
	{
		name: 'Family Dentistry',
		spend: '£400',
		conversions: 65,
		clicks: 235,
		status: 'Active',
		roas: '2.9x',
	},
	{
		name: 'Emergency Care',
		spend: '£400',
		conversions: 47,
		clicks: 624,
		status: 'Active',
		roas: '2.3x',
	},
];

export const GoldCardData = {
	filterOptions: {
		timeFrames: [
			{ value: 'all', label: 'All' },
			{ value: 'last-30-days', label: 'Last 30 Days' },
			{ value: 'last-3-days', label: 'Last 3 Days' },
			{ value: 'last-6-months', label: 'Last 6 Months' },
			{ value: 'last-year', label: 'Last Year' },
			{ value: 'custom-date', label: 'Custom Date' },
		],
		statuses: [
			{ value: 'all', label: 'All' },
			{ value: 'active', label: 'Active' },
			{ value: 'inactive', label: 'Inactive' },
		],
	},
	metrics: [
		{
			title: 'Total Patients Enrolled',
			value: 248,
		},
		{
			title: 'Active Referrals',
			value: 15,
		},
		{
			title: 'Completed Referrals',
			value: 42,
		},
		{
			title: 'Total Commissions',
			value: '£1856.50',
		},
		{
			title: 'Conversion Rate',
			value: '68%',
		},
	],
};

export const recommendationsData = {
	allRecommendations: [
		{
			id: 1,
			title: 'Increase budget on New Patient Promo',
			description:
				'This campaign has shown high ROAS (4.2x) over the last month. Increasing budget by 20% could yield approximately 15-20 more conversions.',
			impact: 'High Impact',
			category: 'budget',
			metrics: {
				roas: '4.2x',
				convRate: '6.8%',
				ctr: '5.4%',
			},
		},
		{
			id: 2,
			title: 'Pause underperforming Teeth Cleaning ad',
			description:
				'This ad has a CTR of only 1.2% and a conversion rate of 0.8%, well below the account average. Consider pausing or refreshing creative.',
			impact: 'Medium Impact',
			category: 'budget',
			metrics: {
				roas: '4.2x',
				convRate: '0.8%',
				ctr: '5.4%',
			},
		},
		{
			id: 3,
			title: 'Add new audience segment to Family Dentistry campaign',
			description:
				'Based on the success with parents aged 35-45, we recommend expanding to the grandparents demographic (age 60-75) who often influence family dental care decisions.',
			impact: 'Medium Impact',
			category: 'targeting',
			metrics: {
				potentialReach: '+18k',
				estCtr: '4.2%',
			},
		},
		{
			id: 4,
			title: 'Use video format for Invisalign ads',
			description:
				'Video ads for similar services have shown 32% higher engagement rates. We recommend creating a short 15-30 second video highlighting the benefits.',
			impact: 'High Impact',
			category: 'creative',
			metrics: {
				estEngagement: '+32%',
				estCtr: '+18%',
			},
		},
		{
			id: 5,
			title: 'Implement retargeting for site visitors',
			description:
				'Only 28% of your ad budget is allocated to retargeting. Increasing to 40% could improve overall conversion rates, as visitors who have shown interest are more likely to convert.',
			impact: 'High Impact',
			category: 'targeting',
			metrics: {
				potentialReach: '+18k',
				estCtr: '4.2%',
			},
		},
	],

	budgetRecommendations: [
		{
			id: 1,
			title: 'Increase budget on New Patient Promo',
			description:
				'This campaign has shown high ROAS (4.2x) over the last month. Increasing budget by 20% could yield approximately 15-20 more conversions.',
			impact: 'High Impact',
			metrics: {
				roas: '4.2x',
				convRate: '6.8%',
				ctr: '5.4%',
			},
		},
		{
			id: 2,
			title: 'Pause underperforming Teeth Cleaning ad',
			description:
				'This ad has a CTR of only 1.2% and a conversion rate of 0.8%, well below the account average. Consider pausing or refreshing creative.',
			impact: 'Medium Impact',
			metrics: {
				roas: '4.2x',
				convRate: '0.8%',
				ctr: '5.4%',
			},
		},
		{
			id: 6,
			title: 'Reallocate budget from Emergency Care campaign',
			description:
				'This campaign has the lowest ROAS (2.1x) in your account. Consider reducing budget by 30% and reallocating to higher-performing campaigns.',
			impact: 'Medium Impact',
			metrics: {
				roas: '2.1x',
				convRate: '3.2%',
				ctr: '4.1%',
			},
		},
	],

	creativeRecommendations: [
		{
			id: 4,
			title: 'Use video format for Invisalign ads',
			description:
				'Video ads for similar services have shown 32% higher engagement rates. We recommend creating a short 15-30 second video highlighting the benefits.',
			impact: 'High Impact',
			metrics: {
				estEngagement: '+32%',
				estCtr: '+18%',
			},
			suggestedCaption:
				'Transform your smile with our professional teeth whitening service! ✨ Book your appointment today and get 20% off your first visit. #DentalCare #TeethWhitening #NewSmile',
			suggestedHashtags: [
				'#DentalCare',
				'#TeethWhitening',
				'#NewSmile',
				'#HealthyTeeth',
			],
		},
		{
			id: 7,
			title: 'Update Family Dentistry ad creative',
			description:
				'Current creative has been running for 3 months. Refreshing with new imagery and copy could improve performance by 15-25%.',
			impact: 'Medium Impact',
			metrics: {
				estEngagement: '+20%',
				estCtr: '+15%',
			},
			suggestedCaption:
				"Complete family dental care under one roof! From kids' cleanings to adult cosmetic procedures. Schedule your family's appointment today! 👨‍👩‍👧‍👦 #FamilyDentistry #DentalCare",
			suggestedHashtags: [
				'#FamilyDentistry',
				'#DentalCare',
				'#KidsTeeth',
				'#FamilyHealth',
			],
		},
		{
			id: 8,
			title: 'Create carousel ad for dental services',
			description:
				'Showcase multiple services in one ad. Carousel ads typically see 30-50% higher CTR for service-based businesses.',
			impact: 'High Impact',
			metrics: {
				estEngagement: '+45%',
				estCtr: '+30%',
			},
			suggestedCaption:
				'Discover our comprehensive dental services! Swipe to see how we can help you achieve your perfect smile. Book a consultation today! 😊 #ComprehensiveCare #DentalServices',
			suggestedHashtags: [
				'#ComprehensiveCare',
				'#DentalServices',
				'#PerfectSmile',
				'#DentalHealth',
			],
		},
	],

	targetingRecommendations: [
		{
			id: 3,
			title: 'Add new audience segment to Family Dentistry campaign',
			description:
				'Based on the success with parents aged 35-45, we recommend expanding to the grandparents demographic (age 60-75) who often influence family dental care decisions.',
			impact: 'Medium Impact',
			metrics: {
				potentialReach: '+18k',
				estCtr: '4.2%',
			},
		},
		{
			id: 5,
			title: 'Implement retargeting for site visitors',
			description:
				'Only 28% of your ad budget is allocated to retargeting. Increasing to 40% could improve overall conversion rates, as visitors who have shown interest are more likely to convert.',
			impact: 'High Impact',
			metrics: {
				potentialReach: '+18k',
				estCtr: '4.2%',
			},
		},
		{
			id: 9,
			title: 'Target dental anxiety keywords',
			description:
				"Create a specific audience for people searching for 'gentle dentist' or 'dental anxiety'. This underserved segment could yield high-quality leads.",
			impact: 'High Impact',
			metrics: {
				potentialReach: '+12k',
				estCtr: '5.8%',
			},
		},
		{
			id: 10,
			title: 'Expand geographic targeting',
			description:
				'Your current 15-mile radius could be expanded to 25 miles for cosmetic procedures, as people travel further for specialized treatments.',
			impact: 'Medium Impact',
			metrics: {
				potentialReach: '+25k',
				estCtr: '3.9%',
			},
		},
	],
};

export const impactColors = {
	'High Impact': {
		bg: 'bg-red-100',
		text: 'text-red-800',
		border: 'border-red-200',
	},
	'Medium Impact': {
		bg: 'bg-yellow-100',
		text: 'text-yellow-800',
		border: 'border-yellow-200',
	},
	'Low Impact': {
		bg: 'bg-green-100',
		text: 'text-green-800',
		border: 'border-green-200',
	},
};
