import { useNoticias } from "../hooks/useNoticias";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

export const Formulario = () => {
  const { categoria, handleChangeCategoria } = useNoticias();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="Categoría"
          onChange={handleChangeCategoria}
          value={categoria}
        >
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};
