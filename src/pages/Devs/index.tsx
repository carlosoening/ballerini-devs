import { useState } from "react";
import Card from "../../components/Card";
import Dev from "../../interfaces/dev";
import { StyledDevs } from "./styles";

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
      name: 'Carlos Oening 2',
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

  return (
    <StyledDevs>
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