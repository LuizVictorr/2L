import { Button } from "@/components/ui/button"
import Head from "next/head"

const termosUso = () => {

    return (
        <div className=" p-10 space-y-5">
            <Head>
                <title>Termos de Uso - Double L</title>
                <meta
                name="Melhores Produtos"
                content="Produtos elegantes para facilitar sua vida."
                />
                <link rel="icon" href="/dinamico-tech.png" />
            </Head>

            <h2 className="text-3xl font-bold">
            <span>
            1.	Termos
            </span>
            </h2>
            <p>
            <span>
            Ao acessar ao site
            <a href="https://dinamico-tech.vercel.app/">
            Double L
            </a>,
            concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </span>
            </p>
            <h2 className="text-3xl font-bold">
            <span>
            2.	Uso de Licença
            </span>
            </h2>
            <p>
            <span>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Double L , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:&nbsp;
            </span>
            </p>
            <ol>
            <li>
            <span>
            modificar ou copiar os materiais;&nbsp;
            </span>
            </li>
            <li>
            <span>
            usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);&nbsp;
            </span>
            </li>
            <li>
            <span>
            tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Double L;&nbsp;
            </span>
            </li>
            <li>
            <span>
            remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou&nbsp;
            </span>
            </li>
            <li>
            <span>
            transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
            </span>
            </li>
            </ol>
            <p>
            <span>
            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Double L a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
            </span>
            </p>
            <h2 className="text-3xl font-bold">
            <span>
            3.	Isenção de responsabilidade
            </span>
            </h2>
            <ol>
            <li>
            <span>
            Os materiais no site da Double L são fornecidos 'como estão'. Double L não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </span>
            </li>
            <li>
            <span>
            Além disso, o Double L não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
            </span>
            </li>
            </ol>
            <h2 className="text-3xl font-bold">
            <span>
            4.	Limitações
            </span>
            </h2>
            <p>
            <span>
            Em nenhum caso o Double L ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Double L, mesmo que Double L ou um representante autorizado da Double L tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
            </span>
            </p>
            <h2 className="text-3xl font-bold">
            <span>
            5.	Precisão dos materiais
            </span>
            </h2>
            <p>
            <span>
            Os materiais exibidos no site da Double L podem incluir erros técnicos, tipográficos ou fotográficos. Double L não garante que qualquer material em seu site seja preciso, completo ou atual. Double L pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Double L não se compromete a atualizar os materiais.
            </span>
            </p>
            <h2 className="text-3xl font-bold">
            <span>
            6.	Links
            </span>
            </h2>
            <p>
            <span>
            O Double L não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Double L do site. O uso de qualquer site vinculado é por conta e risco do usuário.
            </span>
            </p>
            <p>
            </p>
            <h3 className="text-xl font-bold">
            <span>
            Modificações
            </span>
            </h3>
            <p>
            <span>
            O Double L pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </span>
            </p>
            <h3 className="text-xl font-bold">
            <span>
            Lei aplicável
            </span>
            </h3>
            <p>
            <span>
            Estes termos e condições são regidos e interpretados de acordo com as leis do Double L e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </span>
            </p>


            <Button>
                <a 
                href='/'>
                    Voltar
                </a>
            </Button>
        </div>
    )
}

export default termosUso