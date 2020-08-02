import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import { Header, RepositoryInfo, Issues } from './styles'

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <Header>
        <img src={logoImg} alt="github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/52813792?s=460&u=ee9c8be21c18177a6cf9b214124eb99f178be76b&v=4"
            alt="pedroksty"
          />
          <div>
            <strong>pedroksty/gobarber</strong>
            <p>descricao do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1080</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>89</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={'dasd'}>
          <div>
            <strong>strongg</strong>
            <p>pppdwadaw</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
}

export default Repository
