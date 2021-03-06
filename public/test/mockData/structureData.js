mockData.structureData = {
    "tag": "paris",
    "startDate": 1432627741,
    "words": [
    	{
	        "level": 0,
	        "date": 1432627750,
	        "content": [
	        	{
		            "word": "MotLvl0",
		            "occurence": 30,
		            "date": 1432627750,
		            "references": []
	        	}
	    	]
    	}, 
    	{
		    "level": 1,
		    "date": 1432627772,
		    "content": [
		    	{
					"word": "MotLvl1-1",
					"occurence": 5,
					"date": 1432627772,
					"references": ["MotLvl0"]
		    	},
		     	{
		            "word": "MotLvl1-2",
		            "occurence": 6,
		            "date": 1432627776,
		            "references": ["MotLvl0"]
		        }
	    	]
    	}, 
    	{
	        "level": 2,
	        "date": 1432627776,
	        "content": [
	        	{
		            "word": "MotLvl2-1",
		            "occurence": 5,
		            "date": 1432627776,
		            "references": ["MotLvl1-1"]
		        }, 
		        {
		            "word": "MotLvl2-2",
		            "occurence": 5,
		            "date": 1432627776,
		            "references": ["MotLvl1-1"]
		        },
		        {
		            "word": "MotLvl2-3",
		            "occurence": 5,
		            "date": 1432627776,
		            "references": ["MotLvl1-1","MotLvl1-2"]
		        }
	        ]
    	}, 
    	{
	        "level": 3,
	        "date": 1432627778,
	        "content": [
	        	{
		            "word": "MotLvl3-1",
		            "occurence": 5,
		            "date": 1432627776,
		            "references": ["MotLvl2-1","MotLvl2-2","MotLvl2-3"]
		        }
	        ]
    	} 
    ]
};