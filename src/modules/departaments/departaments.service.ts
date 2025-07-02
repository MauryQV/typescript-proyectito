// src/modules/departaments/departaments.service.ts
import { supabase } from "../../config/supabaseClient";
import { CreateDepartamentoDTO } from "./departaments.schema";;

export const getDepartamentos = async () => {
    const { data, error } = await supabase.from("Departamento").select("*");
    if (error) throw new Error(error.message);
    return data;
};

export const createDepartamento = async (dto: CreateDepartamentoDTO) => {
    const { data, error } = await supabase.from("Departamento").insert(dto).select();
    if (error) throw new Error(error.message);
    return data?.[0]; // Devolver el insertado
};
