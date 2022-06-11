package servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;


import footballers.Footballers;
import crud.Lab2CrudInterface;
import footballers.Mock;

/**
 * Servlet implementation class Servlet1
 */
@WebServlet("/Servlet1/*")
public class Servlet1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private List<Footballers> lu = new Mock().getFootballersList();

	ServletConfigInterface servletConfig;
	Lab2CrudInterface lab2Crud;
	
	 /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet1() {
        super();
        // TODO Auto-generated constructor stub
        this.servletConfig = new ServletConfig();
        this.lab2Crud =servletConfig.getCrud();
    }
        
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		setAccessControlHeaders(response);
		response.setContentType("application/json");
		response.getWriter().println(lu);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		setAccessControlHeaders(response);
		Footballers footballers = Helpers.footballersParse(request);
		footballers.setId(Helpers.getNextId(lu));
		lu.add(footballers);
		doGet(request, response);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		setAccessControlHeaders(response);
		Footballers footballers = Helpers.footballersParse(request);
		int Id = Integer.parseInt(request.getPathInfo().substring(1));
		System.out.println(Id);
		response.setContentType("application/json");
		int index = Helpers.getIndexByfootballersId(Id,lu);
		lu.set(index,footballers);
		doGet(request, response);
	}
	
	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		setAccessControlHeaders(response);
		int Id = Integer.parseInt(request.getPathInfo().substring(1));
		System.out.println(Id);
		response.setContentType("application/json");
		int index = Helpers.getIndexByfootballersId(Id,lu);
		lu.remove(index);
		doGet(request, response);
	}
	
		
		protected void doOptions(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			setAccessControlHeaders(response);
			response.setStatus(HttpServletResponse.SC_OK);

		}
		
		private void setAccessControlHeaders(HttpServletResponse resp) {
			
			resp.setHeader("Access-Control-Allow-Origin", "*");
			resp.setHeader("Access-Control-Allow-Methods", "*");
			resp.setHeader("Access-Control-Allow-Headers", "*");
		
	}

}