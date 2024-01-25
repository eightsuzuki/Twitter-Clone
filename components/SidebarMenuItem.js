export default function SidebarMenuItem({ text, Icon, active }) {
    return (
        <div>
            <Icon className="h-7" />
            <span>{text}</span>
        </div>
    )
}
