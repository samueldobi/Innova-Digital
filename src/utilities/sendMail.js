import api from "./api";

export const sendMail = async(formData) => {
    const response =  await api.post('/api/sendmail', formData);
    return response.data;
}