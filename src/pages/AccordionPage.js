import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id:'34534tet',
            label: 'Can I use React on a project',
            content: 'You can use React on any projects you want. You can use React on any projects you want'
        },
        {
            id:'345sd34tet',
            label: 'Can I use Javascript on a project',
            content: 'You can use Javascript on any projects you want. You can use Javascript on any projects you want'
        },
        {
            id:'3453sgh4tet',
            label: 'Can I use MongoDB on a project',
            content: 'You can use MongoDB on any projects you want. You can use MongoDB on any projects you want'
        }
    ];

    return <Accordion items={items} />
}

export default AccordionPage;