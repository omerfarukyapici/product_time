interface ILlinkProps {
    linkName: string,
    linkAddress: string,
    linkClass : string
}

export const Link = ({ linkName, linkAddress, linkClass = "" }: ILlinkProps) => {
    return (
        <a href={linkAddress} className={linkClass}>
            {linkName}
        </a>
    )
}