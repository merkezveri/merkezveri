import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import useArrowKeyNavigationHook from "react-arrow-key-navigation-hook";

var uniqid = require('uniqid');

function SearchBar(props) {

    const parentRef = useArrowKeyNavigationHook({ selectors: "a,button,input,ul,li" });

    // Arama içerisindeki saklayacağımız değişken ve onu tanımlayacağımız fonksiyon.
    const [input, setInput] = useState("");

    //Arama çubuğunda değişiklik yapıldıkça çalışacak.
    const handleChangeSearch = (e) => {
        //Normal davranışını yaptırmaz.
        e.preventDefault()
        
        // input değişkenimizi hooks kullanarak arama çubuğuna yazılan değere eşitliyoruz.
        setInput(e.target.value)
    }

    //Link'e tıklandığında listenin kapanması için boş kümeye eşitleyelim.
    const handleClickLink = (e) => {
        setInput("")
    }

    let SearchItemList = ""; //Arama Listesi
    // Arama eşleşirse döndür.
    if (input.length > 0 ){
        
        SearchItemList = props.itemList.filter((i) => {
            // "İ" gibi harflerde büyük küçük yaparken sorun yaşamamak için lokalleştirme fonksiyonu kullandık. ".toLocaleLowerCase"
            return i.name.toLocaleLowerCase('tr-TR').match(input.toLocaleLowerCase('tr-TR'));
        }); //filter close
    } //if close

    return (
        <React.Fragment>
            <input
                className="form-control form-control-dark"
                type="text"
                placeholder="Arama.."
                aria-label="Arama"
                value={input}
                onChange={handleChangeSearch}
                style={{"height":"48px"}}
            />
            
            {
                input.length > 0 ? (
                <ul ref = {parentRef} className="list-group search-bar-livesearch hide-native-scrollbar">
                    {
                        SearchItemList.map((item) => {
                            return (
                                <Link
                                className="list-group-item list-group-item-action"
                                to={`/data/${item.id}`}
                                onClick={handleClickLink}
                                key={uniqid()}                                >
                                    {item.name}
                                </Link>
                            )
                        })
                    }
                </ul>
                ) : ""
            }
        </React.Fragment>
    )
}

export default SearchBar