const emailWrapper = (html) => {

    return `
        <div style="margin:0px;padding:0px">
            <table
                lang="en"
                role="presentation"
                aria-hidden="true"
                border="0"
                style="width:100%;background-color:#ffffff;padding:0px"
                align="center"
            >
                <tbody>
                    <tr>
                        <td align="center" style="padding:0px">
                            <table border="0" align="center" style="padding:0px">
                                <tbody>
                                    <tr>
                                        <td width="12" style="padding:0px">&nbsp;</td>
                                        <td style="padding:0px">
                                            ${html}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
}

const paragraphs = (text) => {
    if (!text?.length) return '';
    return text.split('\n').map(line => {
        return `<p style="text-align:left;line-height:1.4;color:#343a40;font-size:.97rem;margin:0 0 15px 0;padding:0" align="left">${line}</p>`
    }).join('')
}

export const emailHTML = ({ title, content1, label, content2, link }) => {

    const html = `
        <table
            align="center"
            cellpadding="0"
            cellspacing="0"
            style="border-collapse:collapse;margin:0
            auto;width:650px"
        >
            <tbody>
                <tr valign="top">
                    <td valign="top" style="border-top-width:5px;border-top-color:#e2e8f0;border-top-style:solid">
                        <table width="650" align="left" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="border-collapse:collapse;background:#fff;margin:0 auto;width:600px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                            <tbody>
                                <tr valign="top">
                                    <td width="27%" valign="top" align="center" style="width:27%">
                                        <table width="100%" align="center" cellpadding="0" cellspacing="0" valign="top" style="border-collapse:collapse;table-layout:auto;margin:0 auto;width:100%">
                                            <tbody>
                                                <tr valign="top">
                                                    <td width="100%" align="center" style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;width:100%;color:#2563eb;text-transform: uppercase;">
                                                        <h2>${title}</h2>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="600" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 auto;width:600px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                            <tbody>
                                <tr>
                                    <td width="100%" style="background:#ffffff;padding:20px 20px 20px 20px;width:100%">
                                        ${paragraphs(content1)}
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;table-layout:auto;margin:0 auto">
                                            <tbody>
                                                <tr>
                                                    <td align="center" style="padding:5px 0 20px 0">
                                                        <a
                                                            href="${link}"
                                                            style="color:#f1f5f9;background-color: #2563eb;text-decoration:none;line-height: 1.75;letter-spacing:0.04rem;font-size:.98rem;display:inline-block;text-align: center; vertical-align: middle;padding:12px 20px;border-radius:.3rem;word-break:break-word"
                                                            target="_blank"
                                                        >
                                                            ${label}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        ${paragraphs(content2)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="background:#e2e8f0;padding:20px;width:100%"></td>
                </tr>
            </tbody>
        </table>`;

    return emailWrapper(html)
};
