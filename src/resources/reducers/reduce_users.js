export default function(){
    /*
    i've tried to make api server, which provides with data,
    this is on branch server (i couldnt make it work right),
    but it sends proper data and logs it in console
    */
    return[
        {
                        "id": 1,
                        "name": "John",
                        "surname": "Doe",
                        "github": "facebook",
                        "equipment": [{
                            "id": 11,
                                "brand": "sony",
                                "model": "vaio ds23-32",
                                "serial": "111"
                            },
                            {
                                "id": 12,
                                "brand": "apple",
                                "model": "iphone 6s",
                                "serial": "222"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "Wojciech",
                        "surname": "Iwanicki",
                        "github": "wojciechiwanicki",
                        "equipment": [{
                            "id": 22,
                                "brand": "Asus",
                                "model": "dh-7447",
                                "serial": "444"
                            },
                            {
                                "id": 3,
                                "brand": "apple",
                                "model": "iphone 5s",
                                "serial": "333"
                            }
                        ]
                    }

                ]
            }
