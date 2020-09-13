import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">

            <header>
                <img src="https://avatars3.githubusercontent.com/u/61875527?s=460&u=ee16f67c81ac1dbe9b51ce778ac30144d40bb552&v=4" alt="Gabriel Rio" />
                <div>
                    <strong>Gabriel Paiva Rio</strong>
                    <span>Programador Front-end</span>
                </div>

            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita at saepe corrupti libero.
                 <br /> <br />
                ea voluptates quisquam sint molestiae quam, soluta illum vero nam in dolorum minima minus modi aut nemo?
            </p>
            <footer>
                <p>
                    Preço por Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsapp} alt="botão do whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )

}

export default TeacherItem;
