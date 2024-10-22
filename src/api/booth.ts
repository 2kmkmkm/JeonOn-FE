import { api } from "@/utils/customAxios";

export type BoothType = {
    name: string;
    location: string;
    index: number;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    description: string;
    images: File[];
  };
  
export async function postBooth(data: BoothType) {
    try {
        const formData = new FormData();

        const requestBlob = new Blob(
            [JSON.stringify({
              name: data.name,
              location: data.location,
              start_date: data.start_date,
              end_date: data.end_date,
              start_time: data.start_time,
              end_time: data.end_date,
              description: data.description,
            })],
            { type: "application/json" }
          );
          formData.append("request", requestBlob);
    
        data.images?.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
        });

        const result = await api.post("admins/booths", formData, {
            headers: {"Content-Type": "multipart/form-data"},
        });

        console.log("Affiliate registered: ", result);
        return result;
    } catch (error) {
        console.error("Affilliate registeration failed: ", error);
        throw error;
    }
}

export async function deleteBooth(boothId: number) {
    const result = await api.delete(`admins/boots/${boothId}`)
    return result;
}