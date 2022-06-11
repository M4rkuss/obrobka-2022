package lab5.footballer;

import java.io.Serializable;
import java.util.Iterator;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="footballer1")
public class Footballer {
	@Id
	@GeneratedValue
	int cat;
	String title;
	float price;
	String type;
	
	
	
	public Footballer(int cat, String title, float price, String type) {
		super();
		this.cat = cat;
		this.title = title;
		this.price = price;
		this.type = type;
		
	}
	
	public Footballer() {
	}
	
	public int getCat() {
		return cat;
	}
	public void setCat(int cat) {
		this.cat = cat;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "{\"cat\": "+cat+", \"title\": \""+title+"\",\"price\": "+price+",\"type\": \""+type+"\"}";
	}
}
