import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Category = () => {
  return (
    <Lisk>
      <NavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>

      <NavLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>

      <NavLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>

      <NavLink to={"/cuisine/janpanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </Lisk>
  )
}

const List = styled.NavLink`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

export default Category
