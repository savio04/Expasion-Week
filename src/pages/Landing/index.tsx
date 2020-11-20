import React, {useState} from 'react'
import { Div,Header, Button, Balão} from './styles'
import { FiNavigation, FiUser, FiInstagram,FiLinkedin, FiGithub, FiX } from 'react-icons/fi'

function Landing(){

    const [showBalon,setShowBalon] = useState(false)

    function handleShowBalon(){
        setShowBalon(!showBalon)
    }
    return(
        <>
            <Header> 
                <div>
                    <h1>Soft Skill que todo programador deviria possuir</h1>
                    <a href="https://www.voitto.com.br/blog/artigo/adaptabilidade">
                        Saiba mais
                        <FiNavigation size = {20} />
                    </a>
                </div>
            </Header>
            <Div>
                <div>
                    <h2>O que o termo soft skills significa?</h2>

                    <img src="https://blog-online.pucrs.br/public/wp-content/uploads/2019/04/soft-skills-o-que-e-min.jpg" alt="soft skills"/>
                    <p>Elas dizem respeito à personalidade e ao comportamento. Ou seja, capacidades mentais, emocionais e sociais que as pessoas adquirem ao longo da vida.Estas características são conquistadas a partir de experiências pessoais, 
                    como contexto cultural e educação que recebeu da família.Sendo assim, as soft skills podem ser desenvolvidas na infância ou mesmo durante a vida adulta.</p>
                    <p>Apesar de serem características que impactam na vida pessoal, o termo está cada dia mais comum no meio corporativo.
                    E, considerando que o mercado de trabalho muda constantemente, a busca por acompanhar as tendências se reflete na aquisição de habilidades.
                    Entre elas, criatividade, empatia e espírito empreendedor, conforme a pesquisa O Futuro do Trabalho. O levantamento foi feito pelo LinkedIn, em parceria com a empresa de previsão de tendências WGSN.</p>
                </div>

                <div>
                    <h2>Soft skill imprescindível</h2>


                    <img src="https://fia.com.br/blog/wp-content/uploads/2020/01/adapt-730x487.jpg" alt="adaptabilidade"/>
                    <p>Popularizada como resiliência, a capacidade de adaptação é uma das habilidades imprescindíveis em todas as áreas. Desde sempre, o mundo sofre transformações. Inclusive, no que tange o ambiente profissional.
                    Por conta disso, trabalhadores de diferentes mercados são convocados diariamente para acompanhar as mudanças. Isso requer estar de olho nas novidades que surgem, mas principalmente preparado.</p>
                    <p>Neste sentido, está o papel da resiliência. A partir dela, os profissionais conseguem gerenciar crises, obstáculos e aproveitar oportunidades.
                    Também é por meio desta habilidade que se pode assumir o protagonismo na carreira. Ou seja, identificar o que precisa ser modificado para manter seu espaço no mercado.
                    Os recrutadores acreditam que com ela, os profissionais enfrentam qualquer situação adversa, seja dentro ou fora da empresa.</p>
                </div>

                <div className = 'iframe'>
                    <h2>Conhecendo um pouco mais sobre Adaptabilidade</h2>
                    
                    <iframe title = "adaptabilidade" width="560" height="315" src="https://www.youtube.com/embed/B5tOAmCiGh0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </Div>
            
            <Balão hasShow = {showBalon}>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/savio.araujo0/?hl=pt-br"> <FiInstagram size = {20} color = '#FFF' /> </a>
                    </li>

                    <li>
                        <a href="https://github.com/savio04"> <FiGithub size = {20} color = '#FFF'/> </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/s%C3%A1vio-ara%C3%BAjo-738a251b3/"> <FiLinkedin size = {20} color = '#FFF'/> </a>
                    </li>
                </ul>
            
            </Balão>

            <Button onClick = {handleShowBalon}>
                {
                    showBalon ? <FiX size = {22} color = '#FFF'/>
                    :
                    <FiUser size = {22} color = '#FFF' />
                }
            </Button>
        </>
    )
}

export default Landing