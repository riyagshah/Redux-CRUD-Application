import { EditIcon } from "@chakra-ui/icons";
import { Badge, Box, Checkbox, CheckboxGroup, Flex, Stack,Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const TaskCard = ({
    id,
  title,
  description,
  tags,
  subTasks,
  colorScheme = "green",
}) => {

    

    const [checkbox,setCheckbox]=useState(()=>{
        let data=subTasks.filter((item)=>{
            // console.log(item)
            return item.status && item.subTaskTitle
        })
        .map((item)=>item.subTaskTitle)
        return data
    })
    // console.log(checkbox)


    // console.log(title)
  return (
  <Box width={"230px"} padding="10px" border={"1px solid red"}  margin="auto"  marginBottom={"5px"}>
      <Flex justifyContent={"space-between"}>
          <Text  >{title}</Text>
          <Link to={`/task/${id}`}><EditIcon/></Link>
      </Flex>
      

      <Box>
          <Stack direction={"row"}>
              {tags.length && tags.map((item,index)=>{
                  return (
                    <Badge key={index} 
                    colorScheme={colorScheme}
                    >{item}</Badge>
                  )
              })}

          </Stack>
      </Box>

      <Text textAlign={"left"}>{description}</Text>
 
     <Box>
         {/* so what value={checkbox} do is it compare checkbox with item.subTaskTitle  */}
         {/* and if matches then it will check the checkbox */}

         <CheckboxGroup value={checkbox}>
             {subTasks.length && subTasks.map((item,index)=>(
                 <Checkbox key={index} size="md" value={item.subTaskTitle}>
                     {item.subTaskTitle}
                 </Checkbox>
             ))}
         </CheckboxGroup>
     </Box>

  </Box>
  )
};

export default TaskCard;
