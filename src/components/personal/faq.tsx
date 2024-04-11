import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";

const FAQ = () => {

    return (
        <div className="pb-10">
        <h1 className="text-5xl font-bold pb-6" >
          Perguntas Frequentes
        </h1>
        <div className="lg:flex">
          <Accordion type="single" collapsible className="lg:w-[1100px] m-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                Quais métodos de pagamento vocês aceitam?
              </AccordionTrigger>
              <AccordionContent>
                Aceitamos uma variedade de métodos de pagamento, incluindo cartões de crédito/débito 
                (Visa, Mastercard, American Express), PayPal, boleto bancário e transferência bancária. 
                Todas as opções disponíveis serão apresentadas durante o processo de checkout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                Qual é a política de devolução e troca?
              </AccordionTrigger>
              <AccordionContent>
                Aceitamos devoluções e trocas dentro de um determinado período após a compra, desde que os itens estejam em 
                condições originais, não tenham sido usados e mantenham as etiquetas intactas. Recomendamos que você 
                leia nossa política de devolução e troca para obter detalhes específicos e instruções sobre como proceder.
              </AccordionContent>
            </AccordionItem>
              <AccordionItem value="item-3">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                Como posso rastrear meu pedido?
              </AccordionTrigger>
              <AccordionContent>
                Assim que seu pedido for despachado, você receberá um e-mail de confirmação contendo informações de rastreamento. 
                Você poderá usar essas informações para monitorar o status do seu pedido até que ele seja entregue.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                Vocês oferecem algum programa de fidelidade ou descontos para clientes frequentes?
              </AccordionTrigger>
              <AccordionContent>
                Sim, temos um programa de fidelidade que oferece benefícios exclusivos para nossos clientes frequentes. 
                Você pode se inscrever gratuitamente e acumular pontos a cada compra, que podem ser resgatados por descontos ou brindes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                Qual é a política de privacidade e segurança do seu site?
              </AccordionTrigger>
              <AccordionContent>
                Levamos a segurança e a privacidade dos nossos clientes muito a sério. Todas as informações fornecidas durante
                 o processo de compra são protegidas por criptografia SSL e não são compartilhadas com terceiros sem o seu 
                 consentimento. Recomendamos que você leia nossa política de privacidade para obter mais detalhes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                Vocês têm um tamanho padrão para suas roupas?
              </AccordionTrigger>
              <AccordionContent>
                Nossos produtos têm uma tabela de tamanhos padrão disponível para referência em cada página de produto. 
                No entanto, recomendamos que você verifique as medidas específicas de cada item, pois estas podem variar 
                de acordo com o fabricante e o estilo da roupa.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                Como faço para entrar em contato com o serviço de atendimento ao cliente em caso de dúvidas ou problemas?
              </AccordionTrigger>
              <AccordionContent>
                Você pode entrar em contato com nosso serviço de atendimento ao cliente através do formulário de contato em 
                nosso site, por e-mail ou através das nossas redes sociais. Estamos aqui para ajudar e responderemos às suas 
                perguntas o mais rápido possível.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                Vocês oferecem frete grátis?
              </AccordionTrigger>
              <AccordionContent>
                Sim, oferecemos frete grátis para pedidos acima de um determinado valor, dependendo da sua região. As informações 
                sobre elegibilidade para frete grátis serão exibidas durante o checkout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                Quanto tempo leva para meu pedido ser entregue?
              </AccordionTrigger>
              <AccordionContent>
                O tempo de entrega varia de acordo com o método de envio selecionado e o seu local de entrega. Geralmente, os 
                pedidos são despachados dentro de 1-3 dias úteis após a confirmação do pagamento. Você receberá um prazo estimado 
                de entrega durante o checkout e poderá acompanhar o progresso do seu pedido com as informações de rastreamento fornecidas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                posso experimentar as roupas?
              </AccordionTrigger>
              <AccordionContent>
                No momento, operamos apenas como uma loja online e não temos lojas físicas. No entanto, estamos constantemente 
                expandindo nossos serviços e buscando maneiras de melhor atender aos nossos clientes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger className="text-md lg:text-lg text-left">
                Vocês oferecem assistência para problemas com tamanhos ou medidas?
              </AccordionTrigger>
              <AccordionContent>
                Sim, nossa equipe de atendimento ao cliente está disponível para ajudar com qualquer dúvida relacionada a 
                tamanhos ou medidas. Você pode nos contatar antes ou depois da compra para obter orientação sobre o melhor 
                tamanho para você.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div>
            <div className="lg:sticky lg:top-32 lg:ml-10 border-slate-200 border-2 p-10 mt-5 text-center rounded-lg">
              <h1 className="text-2xl mb-1">
                Ficou com alguma dúvida?
              </h1>
              <p className="mb-5">
                Envie uma mensagem e converse com um de nossos especialistas
              </p>
              <Button>
                <a href="https://wa.me/3496450291" target="_blank">
                  <div className="flex gap-2 items-center">
                    <FaWhatsapp className="text-xl"/> Chamar no Whatsapp
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FAQ;

