import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "¿Qué servicios de diseño de interiores ofrecen?",
    answer:
      "Ofrecemos una gama completa de servicios de diseño de interiores, que incluyen consultoría inicial, proyectos integrales, diseño de mobiliario a medida, selección de materiales y acabados, y seguimiento de obra. Nuestro enfoque se adapta a cada cliente, ya sea para espacios residenciales, comerciales o corporativos.",
  },
  {
    id: "faq-2",
    question: "¿Cómo es el proceso de trabajo con su estudio?",
    answer:
      "Nuestro proceso comienza con una consulta inicial para entender sus necesidades y visión. Luego desarrollamos un concepto, creamos planos detallados y visualizaciones 3D, seleccionamos materiales y mobiliario, y finalmente coordinamos la implementación. Mantenemos comunicación constante durante todo el proyecto para asegurar resultados excepcionales.",
  },
  {
    id: "faq-3",
    question: "¿Cuánto tiempo toma completar un proyecto de diseño?",
    answer:
      "El tiempo varía según la complejidad y escala del proyecto. Una consultoría puede completarse en 2-3 semanas, mientras que un proyecto integral residencial típicamente requiere entre 2 y 4 meses. Proyectos comerciales o de mayor envergadura pueden extenderse hasta 6 meses. Siempre establecemos un cronograma detallado al inicio del proyecto.",
  },
  {
    id: "faq-4",
    question: "¿Trabajan con presupuestos específicos?",
    answer:
      "Sí, nos adaptamos a diferentes presupuestos y siempre somos transparentes sobre los costos. Durante nuestra consulta inicial, analizamos sus objetivos y presupuesto para desarrollar una propuesta que se ajuste a sus posibilidades financieras, optimizando recursos sin comprometer la calidad del diseño.",
  },
  {
    id: "faq-5",
    question: "¿Qué hace que su enfoque de diseño sea único?",
    answer:
      "Nuestro enfoque se distingue por la fusión de funcionalidad y estética personalizada. No seguimos tendencias pasajeras sino que creamos espacios atemporales que reflejan la personalidad de cada cliente. Ponemos especial atención en la selección de materiales sostenibles y en detalles que hacen que cada espacio sea verdaderamente único y auténtico.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="fusion-container max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-sans text-4xl md:text-5xl mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-black/70 max-w-xl mx-auto">
            Resolvemos sus dudas sobre nuestros servicios de diseño interior y
            proceso de trabajo
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-t border-black/10">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value={faq.id}
                  className="border-b border-black/10 py-2"
                >
                  <AccordionTrigger className="text-left  text-lg hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-black/80 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-black/60 italic">
            ¿No encuentra la respuesta que busca? Contáctenos directamente para
            una consulta personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}
