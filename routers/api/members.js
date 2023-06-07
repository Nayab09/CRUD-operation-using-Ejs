const express = require('express');
const router =  express.Router();
const members = require('../../Members')
const uuid = require('uuid');
//-- to get single member from the middleware
router.get('/:id',(req,res)=>
{
    const found = members.some(member=> member.id === parseInt(req.params.id))
    if(found)
    {
       res.json(members.filter(member=> member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg:`NO member with is ${req.params.id}`});
    }

});
//---- route for json format use postman -- get all members
router.get('/',(req,res)=>{
    res.json(members)
});

//-- create member - post
router.post('/',(req,res)=>
{
    const newMember = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email
    }
    if(!newMember.name|| ! newMember.email)
    {
        res.status(400).json({msg:`Please set name and email`})
    }
    members.push(newMember);
    res.json(members);
})
//Update the member -- PUT
router.put('/:id',(req,res)=>
{
    const found = members.some(member=> member.id === parseInt(req.params.id))
    if(found)
    {
        const updMember = req.body;
        members.forEach(member=>
            {
                if(member.id ===parseInt(req.params.id))
                {
                    member.name = updMember.name? updMember.name: member.name;
                    member.email = updMember.email? updMember.email: member.email;
                    
                    res.json({ msg: `Member Updated `,member})
                }
            });
    }
    else{
        res.status(400).json({ msg: `No member found with is ${req.params.id}`});
    }
    
});

//Delete
router.delete('/:id',(req,res)=>
{
    const found = members.some(member=> member.id === parseInt(req.params.id))
    if(found)
    {
       res.json({msg : "Members deleted",members : members.filter(member=> member.id !== parseInt(req.params.id))})
    }else{
        res.status(400).json({msg:`NO member with is ${req.params.id}`});
    }

});
module.exports = router;


