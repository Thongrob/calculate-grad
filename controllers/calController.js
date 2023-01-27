exports.calScore = (req, res) => {
    let {score} = req.body; 

    if(score == '' || score == undefined) {
        res.status(200).json({message: "Please fill your score"})
    } else if (score > 100) {
        res.status(200).json({message: "Your score must be 0 - 100"});
       console.log(typeof score);
    } else {
        switch(true) {
            case score >= 80: res.status(200).json({grad: "Your score is A"})
            break;
    
            case score >= 76: res.status(200).json({grad: "Your score is B+"})
            break;
    
            case score >= 70: res.status(200).json({grad: "Your score is B"})
            break;
    
            case score >= 66: res.status(200).json({grad: "Your score is C+"})
            break;
    
            case score >= 60: res.status(200).json({grad: "Your score is C"})
            break;
            
            case score >= 56: res.status(200).json({grad: "Your score is D+"})
            break;
            
            case score >= 50: res.status(200).json({grad: "Your score is D"})
            break;
            
            case score < 50: res.status(200).json({grad: "Your score is F"})
            break;     
        }
    }
}