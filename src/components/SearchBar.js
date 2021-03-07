import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function SearchBar(props) {
    
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
            return i.name.toLowerCase().match(input);
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
            />
            
            {
                input.length > 0 ? (
                <ul className="list-group livesearch">
                    {
                        SearchItemList.map((item) => {
                            return (
                                <Link
                                className="list-group-item list-group-item-action"
                                to={`/data/${item.id}`}
                                onClick={handleClickLink}>
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