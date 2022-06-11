package footballers;

import java.util.ArrayList;
import java.util.List;

public class Mock {

	private List<Footballers> footballersList = new ArrayList<>();

	public Mock() {
		this.footballersList.add(new Footballers(0, "Owl", 5, "big footballer"));
		this.footballersList.add(new Footballers(1, "Stork", 8, "beautiful footballer"));
		this.footballersList.add(new Footballers(2, "Swallow", 10, "small footballer"));
	
	}
	
	public List<Footballers> getFootballersList() {
		return footballersList;
	}

	public void setFootballersList(List<Footballers> footballersList) {
		this.footballersList = footballersList;
	}


	
	
}

