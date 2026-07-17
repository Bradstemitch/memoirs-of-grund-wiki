import { Table, TableCell, TableRow } from "@mui/material"
import { internalLink } from "./common"
import { table } from "console"

export function wikiPageHeader(name: any) {
    return (
        <h2 style={{ color: '#cc4331' }}>
            {name}
        </h2>
    )
}

export function InfoRow(RowType: string, data: any) {
    let content = []
    if (typeof data !== 'object' && !Array.isArray(data)) {
        content = [
            {
                "detail": null,
                "data": { "name": data }
            }
        ]
    }

    if (Array.isArray(data)) {
        data.map((i: any) => {
            if (typeof i !== 'object') {
                content.push(
                    {
                        "detail": null,
                        "data": { "name": i }
                    }

                )
            } else {
                if (i.fileName) {
                    content.push(
                        {
                            "detail": null,
                            "data": { 'name': i }
                        }
                    )
                } else {
                    content.push(i)
                }
            }

        })
    } else if (typeof data === 'object') {
        if (data.fileName) {
            content.push(
                {
                    "detail": null,
                    "data": { 'name': data }
                }
            )
        } else {
            content.push(data)
        }
    }

    return (
        <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: 'unset' } }}>
            <TableCell style={{ width: '40px', textAlign: 'right', verticalAlign: 'top', paddingRight: 0 }}>
                <strong> {RowType} </strong>
            </TableCell>
            <TableCell>
                {content.map((e: any) => {
                    if (typeof e.data.name !== 'object') {
                        return (
                            <div>
                                {e.data.name}
                                {e.detail && ` (${e.detail})`}
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                {internalLink(e.data.name.name.fore ? (`${e.data.name.name.fore}` + (e.data.name.name.sur && ` ${e.data.name.name.sur}`)) : `${e.data.name.name}`, e.data.name)}
                                {e.detail && ` (${e.detail})`}
                            </div>
                        )
                    }
                })}
            </TableCell>
        </TableRow>
    )
}

export function WikiBar(item: any) {
    return (
        <div style={{
            'float': 'right',
            'width': '340px',
            'paddingTop': '0px',
            'paddingLeft': '40px',
            'paddingRight': '40px',
            'paddingBottom': '40px',
        }}>
            <Table size="small" aria-label="purchases">
                <tbody>
                    {item.imageLoc &&
                        <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: 'unset' } }}>
                            <TableCell colSpan={2} style={{ textAlign: 'center' }}>
                                <img src={item.imageLoc}
                                    style={{
                                        'width': '100%',
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    }
                    {item.info && Object.values(item.info).map(tableRow => {
                        return (
                            <>
                                <TableRow key={`${tableRow.title}-wikiBox-section`}>
                                    <TableCell colSpan={2}>
                                        <strong>
                                            {tableRow.title} Information
                                        </strong>
                                    </TableCell>
                                </TableRow>
                                {Object.values(tableRow.values).map(row => {
                                    return (
                                        <>
                                            {row.value && InfoRow(row.title, row.value)}
                                        </>
                                    )
                                })}
                            </>
                        )
                    })}
                </tbody>
            </Table>
        </div >
    )
}