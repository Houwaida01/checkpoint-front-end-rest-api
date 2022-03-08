//importation express
const express = require("express");

//importation router
const router = express.Router();

//importation schema
const Personne = require("../model/Personne");

//CRUDS
/**
 * methode:get
 * path:http://localhost:5000/api/personnes/test
 */
router.get("/test", (req, res) => {
 return res.status(200).send({msg:"bonjour tout le monde"});
  
});
/**
 * methode:post
 * path:http://localhost:5000/api/personnes/add
 * req.body
 */
router.post("/add", async (req, res) => {
  try {
    const { name, phone, favoriteFoods, age, email } = req.body;
    const newPerson = new Personne({
      name,
      phone,
      favoriteFoods,
      age,
      email,
    });
    await newPerson.save();
    return res.status(200).send({ msg: "the person added", newPerson });
  } catch (error) {
    return res.status(400).send({ msg: "can not add the person", error });
  }
});
/**
 * methode:get ALL
 * path:http://localhost:5000/api/personnes/
 */
router.get("/", async (req, res) => {
  try {
    const personList = await Personne.find();
    return res
      .status(200)
      .send({ msg: "this is the list of person", personList });
  } catch (error) {
    return res.status(400).send({ msg: "can not show the list", error });
  }
});
/**
 * methode:get one person
 * path:http://localhost:5000/api/personne/one/:_id
 * req.params
 */
router.get("/one/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const FoundPerson = await Personne.findOne({ _id });
    return res.status(200).send({ msg: "the person found", FoundPerson });
  } catch (error) {
    return res.status(400).send({ msg: "can not found the person", error });
  }
});
/**
 * methode:update
 * path:http://localhost:5000/api/personne/editPers/:_id
 * req.params && req.body
 */
router.put("/editPers/:_id",async(req,res)=>{
  try {
    const {_id}=req.params
    const { name, phone, favoriteFoods, age, email }=req.body
    const editPerson=await Personne.updateOne({_id},{$set:{...req.body}})
    return res.status(200).send({msg:"the person updated"})
  } catch (error) {
    return res.status(400).send({msg:"can not update the person",error})  
  }
})
/**
 * methode:delete person
 * path:http://localhost:5000/api/personne/deletePers/:_id
 * req.params
 */
router.delete("/deletePers/:_id",async(req,res)=>{
    try {
      const {_id}=req.params
      const deletePerson=await Personne.deleteOne({_id})  
      return res.status(200).send({msg:"the person deleted",deletePerson})
    } catch (error) {
       return res.status(400).send({msg:"can not deleted person",error}) 
    }
})
/**
 * methode:delete all person
 * path:http://localhost:5000/api/personne/deleteAll
 * 
 */
 router.delete("/deleteAll",async(req,res)=>{
  try {
    const deletePerson=await Personne.deleteMany()  
    return res.status(200).send({msg:"list of person deleted",deletePerson})
  } catch (error) {
     return res.status(400).send({msg:"cannot deleted this list",error}) 
  }
})

module.exports = router;
