import React, { useState, FunctionComponent } from "react";
import { useFormControl } from '@mui/material/FormControl';
import { Grid, Container, Select, TextField } from "@mui/material";
import {Box} from "@mui/system";


 

type NewItemFormScreenProps = {}

const NewItemFormScreen: FunctionComponent<NewItemFormScreenProps> = (props: NewItemFormScreenProps) => {
    const [itemValues, setItemValues] = useState({
        itemName: "",
        itemCategory: "",
        itemSize: "",
        itemDescription: "",
        itemPhoto: "",
    })

    const changeHandler = (e: React.ChangeEvent<any>) => {
        setItemValues({...itemValues, [e.target.id]: e.target.value})
        console.log(e.target.id, e.target.value)
    }

    const itemCategories = ['Category 1', 'Category 2', 'Category 3'];
    const itemSizes = ['S', 'M', 'L', 'XL'];

    return(
        <Grid container spacing={10}>
            <Grid item xs={2}>
                <label>Admin/Add Inventory</label>
                <form name="createClothingItemForm">
                    <label>Item Name</label> <br/>
                    <TextField size ="small" variant="filled" id="itemName" name="itemName" onChange={changeHandler} required hiddenLabel fullWidth ></TextField> <br />
                    <label>Item Category</label> <br />
                    <TextField select id="itemCategory" name="itemCategory" variant="filled" onChange={changeHandler}  hiddenLabel fullWidth>
                        <Select required></Select> 
                    </TextField>
                    <br />

                    <label>Item Size</label> <br />
                    <TextField  id="itemSize" name="itemSize" select  variant="filled" hiddenLabel fullWidth onChange={changeHandler}>
                        <Select required></Select>
                    </TextField> <br />
                    <label>Item Description</label> <br />
                    <TextField size="small" variant="filled" id="itemDescription" name="itemDescription" onChange={changeHandler} required  multiline minRows= {4} hiddenLabel fullWidth></TextField> <br />
                    
                    
                </form>
            </Grid>
            <Grid item xs = {2}>
                <Box  maxWidth="sm" sx={{  display: 'flex', height: '40%', alignItems: 'center',justifyContent: 'center', margin: 'auto',  p: 2, border: '2px dashed grey' , borderRadius: 3, fontSize: '15px', flexDirection: 'column'}}>
                    <label>Select an item photo and drop here</label>
                    <input id="itemPhoto" name ="itemPhoto" onChange={changeHandler} required></input>
                    <label>JPG, PNG or PDF, file size no more than 10MB</label>
                </Box>
                <input type="submit"></input> 
            </Grid>
    </Grid> 
    )
}

export default NewItemFormScreen;