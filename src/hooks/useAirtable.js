import  Airtable  from 'airtable';


const base = new Airtable({apiKey: 'keyxKrkirw99pjCvg'}).base('appxj2JCem8PAUTwS');
const table = base('Table 1');
// const base = new Airtable({apiKey: 'YOUR_API_KEY'}).base('appxj2JCem8PAUTwS');

export const useAirtable = () => {

} 

export const getRecords = async() => {
    const records = await table.select({view: "Users"}).firstPage();
    console.log(records)
}

export const createRecord = async( fields ) => {
    const createdRecord = await table.create( fields );
    console.log(createdRecord);
}