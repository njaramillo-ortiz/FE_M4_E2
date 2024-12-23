import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";

export function ServicesList({services})
{
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Servicios</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
            {
                services.map((item, i) => 
                {
                    return(
                        <TableRow key={i}>
                            <TableCell>
                                {item.name}
                            </TableCell>
                        </TableRow>
                    )
                })
            }
            </TableBody>
        </Table>
    );
}