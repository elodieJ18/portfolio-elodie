import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import Accordionarrow from 'react-bootstrap/Accordion';

const Accordiontest = () => {
    return (
        <Accordionarrow>
            <AccordionItem>
                <AccordionHeader>
                    <h3  className="accordion-button">Title 1</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet.
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                    <h3 className={`accordion-title`}>Title 2</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet.
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordionarrow>
    );
};

export default Accordiontest;