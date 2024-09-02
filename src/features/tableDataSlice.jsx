
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      "Account Name": "Freida",
      "Email": "freida@example.com",
      "Phone No.": "9597578880",
      "Website": "http://freida.com",
      "Industry": "Hospital/Nursing Management",
      "Account Status": "true",
      "Remark": "nulla nunc nisl"
    },
    {
      "Account Name": "Aloysius",
      "Email": "aloysius@example.com",
      "Phone No.": "9893111683",
      "Website": "http://aloysius.com",
      "Industry": "Real Estate Investment Trusts",
      "Account Status": "false",
      "Remark": "nulla facilisi"
    },
    {
      "Account Name": "Daffi",
      "Email": "daffi@example.com",
      "Phone No.": "9919136162",
      "Website": "http://daffi.com",
      "Industry": "Hospital/Nursing Management",
      "Account Status": "true",
      "Remark": "ligula sit"
    },
    {
      "Account Name": "Kort",
      "Email": "kort@example.com",
      "Phone No.": "3898221835",
      "Website": "http://kort.com",
      "Industry": "EDP Services",
      "Account Status": "true",
      "Remark": "integer"
    },
    {
      "Account Name": "Heal",
      "Email": "heal@example.com",
      "Phone No.": "3882338589",
      "Website": "http://heal.com",
      "Industry": "n/a",
      "Account Status": "false",
      "Remark": "nulla"
    },
    {
      "Account Name": "Shawna",
      "Email": "shawna@example.com",
      "Phone No.": "4385338190",
      "Website": "http://shawna.com",
      "Industry": "Automotive Aftermarket",
      "Account Status": "false",
      "Remark": "quis turpis"
    },
    {
      "Account Name": "Hildegarde",
      "Email": "hildegarde@example.com",
      "Phone No.": "8096981108",
      "Website": "http://hildegarde.com",
      "Industry": "Industrial Specialists",
      "Account Status": "false",
      "Remark": "pellentesque"
    },
    {
      "Account Name": "Hilka",
      "Email": "hilka@example.com",
      "Phone No.": "8705946955",
      "Website": "http://hilka.com",
      "Industry": "Package Goods/Cosmetics",
      "Account Status": "true",
      "Remark": "fusce"
    },
    {
      "Account Name": "Shaye",
      "Email": "shaye@example.com",
      "Phone No.": "6128374750",
      "Website": "http://shaye.com",
      "Industry": "Industrial Machinery/Components",
      "Account Status": "false",
      "Remark": "egestas"
    },
    {
      "Account Name": "Jana",
      "Email": "jana@example.com",
      "Phone No.": "4228066558",
      "Website": "http://jana.com",
      "Industry": "n/a",
      "Account Status": "true",
      "Remark": "tristique"
    },
    {
      "Account Name": "Theresa",
      "Email": "theresa@example.com",
      "Phone No.": "4782298484",
      "Website": "http://theresa.com",
      "Industry": "Finance/Investments",
      "Account Status": "true",
      "Remark": "duis"
    },
    {
      "Account Name": "Gertie",
      "Email": "gertie@example.com",
      "Phone No.": "8918849311",
      "Website": "http://gertie.com",
      "Industry": "n/a",
      "Account Status": "true",
      "Remark": "morbi"
    },
    {
      "Account Name": "Cissy",
      "Email": "cissy@example.com",
      "Phone No.": "9537220347",
      "Website": "http://cissy.com",
      "Industry": "n/a",
      "Account Status": "false",
      "Remark": "ligula"
    },
    {
      "Account Name": "Michaela",
      "Email": "michaela@example.com",
      "Phone No.": "9154377467",
      "Website": "http://michaela.com",
      "Industry": "Technology Consulting",
      "Account Status": "false",
      "Remark": "fusce"
    },
    {
      "Account Name": "Aveline",
      "Email": "aveline@example.com",
      "Phone No.": "9255490093",
      "Website": "http://aveline.com",
      "Industry": "General Merchandise Stores",
      "Account Status": "true",
      "Remark": "sed"
    },
    {
      "Account Name": "Peg",
      "Email": "peg@example.com",
      "Phone No.": "4799326326",
      "Website": "http://peg.com",
      "Industry": "Food Distributors",
      "Account Status": "true",
      "Remark": "in"
    },
    {
      "Account Name": "Agnes",
      "Email": "agnes@example.com",
      "Phone No.": "9852313287",
      "Website": "http://agnes.com",
      "Industry": "n/a",
      "Account Status": "true",
      "Remark": "nunc"
    },
    {
      "Account Name": "Domenic",
      "Email": "domenic@example.com",
      "Phone No.": "8537118921",
      "Website": "http://domenic.com",
      "Industry": "Retail",
      "Account Status": "false",
      "Remark": "tincidunt"
    },
    {
      "Account Name": "Margery",
      "Email": "margery@example.com",
      "Phone No.": "4825734848",
      "Website": "http://margery.com",
      "Industry": "Wholesale",
      "Account Status": "false",
      "Remark": "egestas"
    },
    {
      "Account Name": "Linnea",
      "Email": "linnea@example.com",
      "Phone No.": "8423150249",
      "Website": "http://linnea.com",
      "Industry": "Healthcare",
      "Account Status": "true",
      "Remark": "lorem"
    },
  ],
};

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { setData, addData } = tableDataSlice.actions;

export default tableDataSlice.reducer;
