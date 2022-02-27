import { useState } from "react";
import Card from "../../components/Card";
import Dev from "../../interfaces/dev";
import { OptionsContainer, SearchInput, SearchInputContainer, StyledDevs } from "./styles";
import searchIcon from '../../assets/search-icon.svg';
import { Button } from "../../components/Button";

function Devs() {

  const [ devs, setDevs ] = useState<Dev[]>([
    {
      name: 'Carlos Oening',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening',
      avatar: null,
      linkedinUser: 'carlosoening'
    },
    {
      name: 'Ricardo Passos',
      role: 'Fullstack Developer',
      githubUser: 'carlosoening2',
      avatar: null,
      linkedinUser: 'carlosoening'
    },
  ]);

  function handleRemoveItem(props: any) {
    const newDevs = devs.filter((d, i) => i != props.id);
    setDevs(newDevs);
  }

  function handleSearchInputChange(event: any) {
    let value = event.target.value;
    console.log(value);
    setDevs(devs.filter(d => d.name.toLowerCase().includes(value.toLowerCase())));
  }

  return (
    <StyledDevs>
      <OptionsContainer>
        <SearchInputContainer>
          <img src={searchIcon} alt="Search Icon" />
          <SearchInput placeholder="Buscar" onChange={handleSearchInputChange}></SearchInput>
        </SearchInputContainer>
        <Button width="200px" height="40px" fontSize="14px">Adicionar Desenvolvedor</Button>
      </OptionsContainer>
      {devs.map((d, i) => {
        return (
          <Card
            id={i}
            key={`key_${d.name}`} 
            name={d.name} 
            role={d.role}
            githubUser={d.githubUser}
            onRemoveItem={handleRemoveItem}
          >
          </Card>
        );
      })}
    </StyledDevs>
  );
}

export default Devs;