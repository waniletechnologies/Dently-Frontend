import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

export function FinancePaginantion({ currentPage, totalPages, onPageChange }) {
	const pages = [];
	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href="#"
						onClick={() => onPageChange(Math.max(1, currentPage - 1))}
						className="text-[#2A2828]"
					/>
				</PaginationItem>
				{pages.map((page) => (
					<PaginationItem key={page}>
						<PaginationLink
							className="text-[#2A2828] bg-white"
							href="#"
							isActive={page === currentPage}
							onClick={() => onPageChange(page)}
						>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}
				{totalPages > 3 && <PaginationEllipsis />}
				<PaginationItem>
					<PaginationNext
						href="#"
						onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
						className="text-[#2A2828]"
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
