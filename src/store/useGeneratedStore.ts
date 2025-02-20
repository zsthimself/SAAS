import { generateImageAction } from '@/app/actions/image-actions';
import { create } from 'zustand'
import { z } from "zod";
import { ImageGenerationFormSchema } from "@/components/image-generation/configurations";

interface GenerateState {
loading:boolean,
    images:Array<{url:string}>,
    error:string|null}

const useGeneratedStore = create<GenerateState>((set) => ({
    loading:false,
    images:[],
error:null,
  generateImage:async(values:z.infer<typeof ImageGenerationFormSchema>)=>{
    set({loading:true,error:null})
    try{
     const {error,success,data} =  await generateImageAction(values);
     if(!success){
        set({error:error,loading:false})
        return
     }
     set({images:data,loading:false})
    }catch(error){
        console.error(error);
        set({error:'Failed to generate image.Please try again.',
            loading:false
        })
    }
  }
}));
export default useGeneratedStore;