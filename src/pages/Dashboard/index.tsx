import React from 'react'

import logoImg from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="repositories">
          <img
            src="https://avatars2.githubusercontent.com/u/52813792?s=460&u=ee9c8be21c18177a6cf9b214124eb99f178be76b&v=4"
            alt="pedroksty"
          />
          <div>
            <strong>pedroksty/GoBarber</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="repositories">
          <img
            src="https://avatars2.githubusercontent.com/u/52813792?s=460&u=ee9c8be21c18177a6cf9b214124eb99f178be76b&v=4"
            alt="pedroksty"
          />
          <div>
            <strong>pedroksty/GoBarber</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="repositories">
          <img
            src="https://avatars2.githubusercontent.com/u/52813792?s=460&u=ee9c8be21c18177a6cf9b214124eb99f178be76b&v=4"
            alt="pedroksty"
          />
          <div>
            <strong>pedroksty/GoBarber</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repositories">
          <img
            src="https://avatars2.githubusercontent.com/u/52813792?s=460&u=ee9c8be21c18177a6cf9b214124eb99f178be76b&v=4"
            alt="pedroksty"
          />
          <div>
            <strong>pedroksty/GoBarber</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repositories">
          <img
            src="https://avatars2.githubusercontent.com/u/52813792?s=460&u=ee9c8be21c18177a6cf9b214124eb99f178be76b&v=4"
            alt="pedroksty"
          />
          <div>
            <strong>pedroksty/GoBarber</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repositories">
          <img
            src="https://avatars2.githubusercontent.com/u/52813792?s=460&u=ee9c8be21c18177a6cf9b214124eb99f178be76b&v=4"
            alt="pedroksty"
          />
          <div>
            <strong>pedroksty/GoBarber</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repositories">
          <img
            src="https://avatars2.githubusercontent.com/u/52813792?s=460&u=ee9c8be21c18177a6cf9b214124eb99f178be76b&v=4"
            alt="pedroksty"
          />
          <div>
            <strong>pedroksty/GoBarber</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
