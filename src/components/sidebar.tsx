'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import { dashboardData } from '@/lib/db';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BsTv } from 'react-icons/bs';
import { HiChartBar, HiCog, HiCurrencyDollar, HiUsers } from 'react-icons/hi';
import { MdLogout, MdPhone, MdTrendingUp } from 'react-icons/md';
import { TbSmartHome } from 'react-icons/tb';
import { logo } from '../../public/images';
import { NavItem } from './NavItem';
import { Button } from './ui/button';
import { Sheet, SheetContent } from './ui/sheet';

const iconMap = {
	TbSmartHome,
	Phone: MdPhone,
	Users: HiUsers,
	DollarSign: HiCurrencyDollar,
	TrendingUp: MdTrendingUp,
	BarChart3: HiChartBar,
	TvMinimalPlay: BsTv,
	Settings: HiCog,
};

const SidebarContent = () => {
	const pathname = usePathname();

	return (
		<div className="h-full flex flex-col bg-white overflow-hidden">
			{/* Logo */}
			<div className="p-6 shrink-0">
				<Image
					src={logo}
					alt="logo"
					width={100}
					height={100}
					className="object-cover"
				/>
			</div>

			{/* Navigation */}
			<nav className="flex-1 px-4 overflow-y-auto overflow-x-hidden">
				<div className="space-y-1">
					{dashboardData.navigationItems.map((item) => {
						const Icon = iconMap[item.icon as keyof typeof iconMap];
						return (
							<NavItem
								key={item.title}
								title={item.title}
								icon={Icon}
								path={item.path}
								active={pathname === item.path}
								hasSubmenu={item.hasSubmenu}
								submenuItems={item.submenuItems}
							/>
						);
					})}
				</div>
			</nav>

			{/* Logout */}
			<div className="p-2 border-t border-[#e1e1e1] shrink-0">
				<Button
					variant="ghost"
					className="w-full justify-start text-[#dc2626] hover:text-[#dc2626] hover:bg-red-50"
				>
					<MdLogout className="mr-3 h-4 w-4" />
					Logout
				</Button>
			</div>
		</div>
	);
};

export function Sidebar() {
	const { isOpen, close } = useSidebar();

	return (
		<>
			{/* Desktop Sidebar */}
			<div className="hidden md:block w-64 shrink-0">
				<div className="fixed top-0 bottom-0 w-64 border-r border-[#e1e1e1] overflow-hidden">
					<SidebarContent />
				</div>
			</div>

			{/* Mobile Drawer */}
			<Sheet open={isOpen} onOpenChange={close}>
				<SheetContent side="left" className="w-72 p-0 overflow-hidden">
					<SidebarContent />
				</SheetContent>
			</Sheet>
		</>
	);
}
