import { any } from 'zod';
import { supabase } from '../../config/supabaseClient';

async function createJob(params: { title: string; description: string }) {
    const { data, error } = await supabase
        .from('job')
        .insert([
            { title: params.title, description: params.description }
        ]);

    if (error) {
        throw new Error(`Error creating job: ${error.message}`);
    }

    return data;
}


async function getJobs() {

    //utilizando una función de llamada a procedimiento almacenado
    const { data, error } = await supabase.rpc('get_all_jobs');

    if (error) {
        throw new Error(`Error fetching jobs: ${error.message}`);
    }

    return data;
};

export { createJob, getJobs };